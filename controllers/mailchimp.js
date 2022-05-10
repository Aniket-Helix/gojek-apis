const httpStatusCode = require('http-status-codes');
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: "df60fad82ff1e7ac248f31d2ebba35da-us17",
    server: "us17",
});

const addMemberToList = async (req, res) => {
    try {
        const response = await mailchimp.lists.addListMember("80f0ea73ee", req.body);
        return res.status(httpStatusCode.OK).send({
                status: true,
                type: 'success',
                message: 'Added email to mailchimp.'
        });
    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            status: false,
            type: 'error',
            message: 'Error while adding email to mailchimp.',
            data: error
        });
    }
}


module.exports = {
    addMemberToList
}