
const reducer = (state : any, action :any) : any=>{
    switch(action.type){
        case 'USER_LOGIN':
            const userdata = action.payload
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
        case 'ACTIVE_NODE':
            const node = action.payload
            return{
                ...state,
                currentnode:node
            }
    }
}

export default reducer