const axios = require('axios');

let getProducts = (endPoint) => {
    let options = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions${endPoint}`,
        // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/553673/answers',
        // url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products`,
        headers: {
            'Authorization': process.env.TOKEN
        }
    }
    return axios(options);
};

const postQuestion = (data) => {
    var product_id = parseInt(data.product_id);
    const params = {
        body: data.question,
        name: data.nickName,
        email: data.email,
        product_id: product_id,
    };
    console.log('this is the data', params);
    // params = JSON.stringify(params)
    return axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions', params, {
        headers: {
            'Authorization': process.env.TOKEN
        }
    })
};

const postAnswer = (data, questionId) => {
    // var product_id = parseInt(data.product_id);
    var questionId = questionId;
    const params = {
        body: data.question,
        name: data.nickName,
        email: data.email,
        photos: []
    };
    console.log('this is the data', params, questionId);
    // params = JSON.stringify(params)
    return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions${questionId}`, params, {
        headers: {
            'Authorization': process.env.TOKEN
        }
    })
};

// getProducts('?product_id=59555')
// .then(question=> {
//     // console.log('question', question.data)
//   console.log('data', question.data.results[0].answers);
// //   res.send(JSON.stringify(question.data.results));
// })

// var result = {
//     question: 'what is the size of this products?',
//     nickName: 'Glen',
//     email: 'Glen@gmail.com',
//     product_id: 59555
// }



module.exports = {
    getProducts,
    postQuestion,
    postAnswer,
}
// module.exports = postQuestion;