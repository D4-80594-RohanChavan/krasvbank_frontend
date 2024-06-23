import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import axiosV1 from '../../utils/axiosV1';
import PageTitle from '../helpers/PageTitle';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

function Dashboard() {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));
    const [barChart, setBarChart] = useState({});
    const [doughnutChart, setDoughnutChart] = useState({});

    const fetchBarChartData = () => {
        axiosV1.post('/reports/monthly-summary/user', null, {
            params: {
                accountNumber: parseInt(user?.accountNumber, 10),
            },
        }).then((response) => {
            setBarChart(response?.data);
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: error?.response?.data?.responseMessage ?? 'Failed to fetch yearly transaction stats.',
                timer: 3000,
                showConfirmButton: false,
            });
        });
    };

    const fetchDoughnutChartData = () => {
        axiosV1.post('/reports/monthly-summary/user/current', null, {
            params: {
                accountNumber: parseInt(user?.accountNumber, 10),
            },
        }).then((response) => {
            setDoughnutChart(response?.data);
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: error?.response?.data?.responseMessage ?? 'Failed to fetch monthly transaction stats.',
                timer: 3000,
                showConfirmButton: false,
            });
        });
    };

    useEffect(() => {
        document.title = 'Dashboard';
        fetchBarChartData();
        fetchDoughnutChartData();
    }, []);

    const barChartOptions = {
        plugins: {
            title: {
                display: false,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const barChartData = {
        labels: Object.values(barChart)?.map((val) => moment(val?.month, 'YYYY-MM').format('MMM-YY')),
        datasets: [
            {
                label: 'Debit',
                data: Object.values(barChart)?.map((val) => val?.totalDebits ?? 0),
                backgroundColor: '#0d6efd',
            },
            {
                label: 'Credit',
                data: Object.values(barChart)?.map((val) => val?.totalCredits ?? 0),
                backgroundColor: '#00b7ff',
            },
            {
                label: 'Transfer',
                data: Object.values(barChart)?.map((val) => val?.totalTransfers ?? 0),
                backgroundColor: '#5beeff',
            },
        ],
    };

    const doughnutChartData = {
        labels: ['Debit', 'Credit', 'Transfer'],
        datasets: [
            {
                data: [doughnutChart?.totalDebits ?? 0, doughnutChart?.totalCredits ?? 0, doughnutChart?.totalTransfers ?? 0],
                backgroundColor: ['#0d6efd', '#00b7ff', '#5beeff'],
            },
        ],
    };

    return (
        <div className="container-fluid p-0">
            <PageTitle breadcrumb={[{ name: 'Dashboard' }]} />
            <div className="row">
                <div className="col-md-8 col-12 mb-3">
                    <div className="card border-primary h-100">
                        <div className="card-header bg-primary-subtle border-primary">
                            <h6 className="mb-0">Yearly Transaction Stats</h6>
                        </div>
                        <div className="card-body d-flex align-items-center">
                            <Bar options={barChartOptions} data={barChartData} />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mb-3">
                    <div className="card border-primary h-100">
                        <div className="card-header bg-primary-subtle border-primary">
                            <h6 className="mb-0">Monthly Transaction Stats</h6>
                        </div>
                        <div className="card-body d-flex align-items-center">
                            <Doughnut data={doughnutChartData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
