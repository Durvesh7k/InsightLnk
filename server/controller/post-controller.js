import Post from "../model/post.js"

export const createPost = async (request, response) => {
    try {
        const newPost = await new Post(request.body);
        newPost.save();
        response.status(200).json({ message: 'post created successfully' });
    } catch (err) {
        response.status(500).json({ message: err.message });
    }

}

export const getPosts = async (request, response) => {
    let category = request.query.category;
    try {
        let posts;
        if (category) {
            posts = await Post.find({ categories: category });
        } else {
            posts = await Post.find({});
        }
        return response.status(200).json(posts);
    } catch (err) {
        return response.status(500).json({ message: err.message });
    }
}

export const getPost = async (request, response) => {
    let id = request.query.id;
    try {
        const post = await Post.findById(id);
        return response.status(200).json(post);
    } catch (err) {
        return response.status(500).json({ message: err.message });
    }
}

export const getPostByUserName =  async(request, response) => {
    let username = request.query.username;
    try {
        let posts;
        if(username){
            posts =  await Post.find({ userName: username});
        }
        else{
            return response.status(400).json({message: 'Username not found'});
        }

        return response.status(200).json(posts);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}


export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        if (!post) {
            return response.status(404).json({ message: 'post not found' });
        }
        await Post.findByIdAndUpdate(request.params.id, { $set: request.body })

        return response.status(200).json({ message: "Successfully update the post" })
    } catch (err) {
        return response.status(500).json({ message: err.message });
    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        if(!post){
            return response.status(404).json({ message: 'post not found' });
        }
        await Post.findByIdAndDelete(request.params.id);
        return response.status(200).json({message: 'Successfully deleted post'});
    } catch (err) {
        return response.status(500).json({ message: err.message });
    }
}