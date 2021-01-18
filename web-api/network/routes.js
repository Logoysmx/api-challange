import express from 'express';
import demoRouter from '../components/user/network';
import authRouter from '../components/auth/network';

const routes = (server) => {
    server.use('/api/user', demoRouter);
    server.use('/api/login', authRouter);
}

module.exports = routes;