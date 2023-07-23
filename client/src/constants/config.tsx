// API NOTIFICATION MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}


export const SERVICE_URLS = {
    userSignup : {url : '/signup', method : 'POST'},
    loginUser : {url : '/login', method : 'POST'},
    uploadImage : {url : '/file/upload', method : 'POST'},
    createPost : {url : '/create', method : 'POST'},
    getPosts : {url : '/posts', method : 'GET', params: true},
    getPost : {url : '/details/:id', method : 'GET', params: true},
    updatePost : {url : '/update', method : 'PUT', query: true},
    deletePost : {url : '/delete', method : 'DELETE', query: true},
    newComment : {url : '/comment/new', method : 'POST'},
    getComments : {url : '/comments', method : 'GET', query: true},
    deleteComment : {url : '/delete/comment', method : 'DELETE', query: true},
    getPostByUserName : {url : '/account', method : 'GET', params: true},
}