import express from 'express';
import demoRouter from '../components/demo/network';

const routes = (server) => {
    server.use('/demo', demoRouter);
}

module.exports = routes;