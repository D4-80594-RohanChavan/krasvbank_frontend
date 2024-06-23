import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import moment from 'moment';
import Swal from 'sweetalert2';
import { FaUserMinus, FaUserPlus, FaUsers } from 'react-icons/fa';
import axiosV1 from '../../utils/axiosV1';
import PageTitle from '../helpers/PageTitle';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

function AdminDashboard() {
    const [userStats, setUserStats] = useState({});
    const [barChart, setBarChart] = useState({});
    const [doughnutChart, setDoughnutChart] = useState({});

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

    const fetchUserStatsData = () => {
        axiosV1.get('/admin/users-summary')
            .then((response) => {
                setUserStats(response?.data);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: error?.response?.data?.responseMessage ?? 'Failed to fetch user stats.',
                    timer: 3000,
                    showConfirmButton: false,
                });
            });
    };

    const fetchBarChartData = () => {
        axiosV1.get('/reports/admin/monthly-summary')
            .then((response) => {
                setBarChart(response?.data);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: error?.response?.data?.responseMessage ?? 'Failed to fetch yearly transaction stats.',
                    timer: 3000,
                    showConfirmButton: false,
                });
            });
    };

    const fetchDoughnutChartData = () => {
        axiosV1.get('/reports/admin/monthly-summary/current')
            .then((response) => {
                setDoughnutChart(response?.data);
            })
            .catch((error) => {
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
        fetchUserStatsData();
        fetchBarChartData();
        fetchDoughnutChartData();
    }, []);

    return (
        <div className="container-fluid p-0">
            <PageTitle breadcrumb={[{ name: 'Dashboard' }]} />
            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-evenly">
                        <div className="col-xl-4 col-md-4 col-12 mb-3">
                            <div className="card">
                                <div className="card-body bg-success-subtle border-start border-success border-5 rounded">
                                    <div className="row align-items-center">
                                        <div className="col-xl-8 col-lg-7 col-md-7 col-8 text-success text-center">
                                            <h1>{userStats?.activeUsers ?? 0}</h1>
                                            <h5>Active Users</h5>
                                        </div>
                                        <div className="col-xl-4 col-lg-5 col-md-5 col-4 text-center">
                                            <div className="stat-icon bg-success">
                                                <FaUserPlus fontSize={30} className="text-light" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-12 mb-3">
                            <div className="card">
                                <div className="card-body bg-danger-subtle border-start border-danger border-5 rounded">
                                    <div className="row align-items-center">
                                        <div className="col-xl-8 col-lg-7 col-md-7 col-8 text-danger text-center">
                                            <h1>{userStats?.inActiveUsers ?? 0}</h1>
                                            <h5>Inactive Users</h5>
                                        </div>
                                        <div className="col-xl-4 col-lg-5 col-md-5 col-4 text-center">
                                            <div className="stat-icon bg-danger">
                                                <FaUserMinus fontSize={30} className="text-light" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-12 mb-3">
                            <div className="card">
                                <div className="card-body bg-primary-subtle border-start border-primary border-5 rounded">
                                    <div className="row align-items-center">
                                        <div className="col-xl-8 col-lg-7 col-md-7 col-8 text-primary text-center">
                                            <h1>{userStats?.totalUsers ?? 0}</h1>
                                            <h5>Total Users</h5>
                                        </div>
                                        <div className="col-xl-4 col-lg-5 col-md-5 col-4 text-center">
                                            <div className="stat-icon bg-primary">
                                                <FaUsers fontSize={30} className="text-light" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default AdminDashboard;
