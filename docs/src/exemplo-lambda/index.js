// src/exemplo-lambda/index.js

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Bem-vindo à API da Farmácia Abstergo!",
            status: "OK"
        }),
    };
    return response;
};
