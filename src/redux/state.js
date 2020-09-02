
let store = {
    _callSubscriber() {
        console.log('state updated');
    },
    _state: {
        profilePage: {
            postData: [
                { id: '1', content: 'Hello world', likesCount: '11', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' },
                { id: '2', content: 'This is my first post!', likesCount: '5', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' },
                { id: '3', content: 'Today I am tired.', likesCount: '1', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' },
                { id: '4', content: 'Happy holidays', likesCount: '91', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' }
            ],
            newPostText: 'Hello world!'
        },
        messagesPage: {
            peopleData: [
                { id: '1', name: 'Dmitry', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
                { id: '2', name: 'Sasha', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
                { id: '3', name: 'Andrew', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
                { id: '4', name: 'Sveta', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
                { id: '5', name: 'Valera', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
                { id: '6', name: 'Viktor', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" }
            ],
            conversationData: [
                { id: 0, name: 'Dmitry', text: 'Hello David', imgUrl: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" },
                { id: 1, name: 'David', text: 'Hello Dmitry.', imgUrl: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" },
                { id: 0, name: 'Dmitry', text: 'How are you?', imgUrl: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" },
                { id: 1, name: 'David', text: 'I am good, and how are you?', imgUrl: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" }
            ],
            newMessageText: 'Hello world!'
        },
        navbarPage: {
            friendsData: [
                { imgUrl: "https://image.flaticon.com/icons/svg/145/145843.svg", name: "Dmitry" },
                { imgUrl: "https://image.flaticon.com/icons/svg/145/145843.svg", name: "Zheka" },
                { imgUrl: "https://image.flaticon.com/icons/svg/145/145843.svg", name: "Vladimir" }
            ]
        }
    },

    getState() {
        return this._state;
    },
 
    addNewPost() {
        let newPost = {
            id: 5,
            content: this._state.profilePage.newPostText,
            likesCount: 0,
            imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostElement(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addNewMessage() {
        let newMessage = {
            id: 1,
            name: 'David',
            imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
            text: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.conversationData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state); 
    },
    updateNewMessageElement(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;