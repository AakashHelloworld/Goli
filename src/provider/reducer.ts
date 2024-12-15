
const reducer = (state : any, action :any) : any=>{
    switch(action.type){
        case 'USER_LOGIN':
            const userdata = action.payload
            console.log(userdata, "UserData")
            return {
                ...state, 
                userdata: {
                    id: userdata?._id,
                    username: userdata?.Username,
                    email: userdata?.Email,
                    profilePic: userdata?.ProfilePic,
                    role: userdata?.Role
                    } 
            }
    }
}

export default reducer