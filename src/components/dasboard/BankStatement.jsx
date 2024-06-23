import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import DataTable from 'react-data-table-component';
import axiosV1 from '../../utils/axiosV1';
import TableLoader from '../helpers/TableLoader';
import NoData from '../helpers/NoData';
import PageTitle from '../helpers/PageTitle';

function BankStatement() {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));
    const [isTableLoading, setIsTableLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        defaultValues: {
            startDate: null,
            endDate: null,
        },
    });
    const [statementData, setStatementData] = useState([]);

    useEffect(() => {
        document.title = 'Bank Statement';
    }, []);

    const columns = [
        {
            name: 'Transaction ID',
            selector: (row) => row?.transactionId,
            format: (row) => <span title={row?.transactionId ?? '-'}>{row?.transactionId ?? '-'}</span>,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Type',
            selector: (row) => row?.transactionType,
            format: (row) => <span title={row?.transactionType ?? '-'} className={`badge fw-semibold text-bg-${row?.transactionType === 'CREDIT' ? 'success' : (row?.transactionType === 'DEBIT' ? 'danger' : 'secondary')}`}>{row?.transactionType ?? '-'}</span>,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Amount',
            selector: (row) => row?.amount,
            format: (row) => <span title={row?.amount ?? '-'}>{row?.amount ?? '-'}</span>,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Status',
            selector: (row) => row?.status,
            format: (row) => <span title={row?.status ?? '-'}>{row?.status === 'SUCCESS' ? <span className="badge fw-semibold rounded-pill text-bg-success">SUCCESS</span> : <span className="badge fw-semibold rounded-pill text-bg-danger">FAILED</span>}</span>,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Date',
            selector: (row) => row?.createdAt,
            format: (row) => <span title={moment(row?.createdAt, 'YYYY-MM-DD').format('llll')}>{moment(row?.createdAt, 'YYYY-MM-DD').format('llll')}</span>,
            sortable: true,
            reorder: true,
        },
    ];

    const submitHandler = (data) => {
        setIsTableLoading(true);
        axiosV1.get('/user/bankStatement', {
            params: {
                accountNumber: user?.accountNumber,
                startDate: data?.startDate,
                endDate: data?.endDate,
            },
        }).then((response) => {
            setStatementData(response?.data);
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: error?.response?.data?.responseMessage ?? 'Failed to fetch bank statement.',
                timer: 3000,
                showConfirmButton: false,
            });
        }).finally(() => {
            setIsTableLoading(false);
        });
    };

    return (
        <div className="container-fluid p-0">
            <PageTitle breadcrumb={[{ name: 'Bank Statement' }]} />
            <div className="row">
                <div className="col-12">
                    <div className="card border-primary">
                        <div className="card-header bg-primary-subtle border-primary">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <h6 className="mb-0">Bank Statement</h6>
                                </div>
                                <div className="col-md-6 col-12 text-end">
                                    <form onSubmit={handleSubmit(submitHandler)}>
                                        <div className="input-group input-group-sm justify-content-start justify-content-md-end">
                                            <input type="date" className="form-control form-control-sm" style={{ maxWidth: '150px' }} id="startDate" {...register('startDate', { required: 'This start date is required.' })} />
                                            <input type="date" className="form-control form-control-sm" style={{ maxWidth: '150px' }} id="endDate" {...register('endDate', { required: 'This end date is required.' })} />
                                            <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                                        </div>
                                        {(errors?.startDate || errors?.endDate) && <small className="text-danger">{errors?.startDate?.message || errors?.endDate?.message}</small>}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-1">
                            <DataTable
                                dense
                                striped
                                responsive
                                data={statementData}
                                columns={columns}
                                pagination
                                progressPending={isTableLoading}
                                progressComponent={<TableLoader />}
                                noDataComponent={<NoData />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BankStatement;
