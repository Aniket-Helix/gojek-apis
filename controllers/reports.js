const reportService = require('../services/reports')
const httpStatusCode = require('http-status-codes')

const getReportData = async (req, res) => {
    try {
        const varId = req.query.varId || null;
        const response = await reportService.getReportsData(varId);
        if (response && response.length <= 0) {
            return res.status(httpStatusCode.OK).send({
                status: true,
                type: 'success',
                message: 'No data exist',
                data: [],
            });
        }
        const x = response.map(x => x.datetime);
        const y = response.map(x => x.value);
        const type = response.map(x=> typeof x.fields_json === "string" ? JSON.parse(x.fields_json.replace(/'/g,'"')): x.fields_json);
        const unit = response[0].unit;
        const yoy = response[0].yoy
        const qoq = response[0].qoq
        const mom = response[0].mom
        const dod = response[0].dod 
        const wow = response[0].wow
        return res.status(httpStatusCode.OK).send({
            status: true,
            type: 'success',
            message: 'Report data fetched successfully',
            data: {
                x, y, type, unit, yoy, qoq, mom, dod, wow
            },
        });
    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            status: false,
            type: 'error',
            message: 'Error while fetching data',
            data: error,
        });
    }
}

const getFilteredReportData = async (req, res) => {
    try {
        const varId = req.query.varId || null;
        const response = await reportService.getFilteredReportsData(varId, req.body);
        if (response && response.length <= 0) {
            return res.status(httpStatusCode.OK).send({
                status: true,
                type: 'success',
                message: 'No data exist',
                data: [],
            });
        }
        const x = response.map(x => x.datetime);
        const y = response.map(x => x.value);
        const type = response.map(x=> typeof x.fields_json === "string" ? JSON.parse(x.fields_json.replace(/'/g,'"')): x.fields_json);
        const unit = response[0].unit;
        const yoy = response[0].yoy
        const qoq = response[0].qoq
        const mom = response[0].mom
        const dod = response[0].dod 
        const wow = response[0].wow
        return res.status(httpStatusCode.OK).send({
            status: true,
            type: 'success',
            message: 'Report data fetched successfully',
            data: {
                x, y, type, unit, yoy, qoq, mom, dod, wow
            },
        });
    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            status: false,
            type: 'error',
            message: 'Error while fetching data',
            data: error,
        });
    }
}


module.exports = {
    getReportData,
    getFilteredReportData
}