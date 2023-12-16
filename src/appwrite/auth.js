import Conf from "../conf/conf";
import { Client, Account } from "appwrite";




export class  AuthService {
    client = new client()
    account;


    constructor(){
        this.client
        .setEndpoint()
        .setProject()
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {

            const UserAccount = await this.account.create(ID.unique, email, password, name)
            if(UserAccount){
                return this.login({email, password})
            }
            else{
                return UserAccount
            }
            
        } catch (error) {
            throw error
            
        }

        
    }
    async login({email, password}){
        try {

            return await this.account.createEmailSession(email, password)
            
        } catch (error) {
            throw error
            
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error)
        }
        return null
    }
    async logOut(){
        try {
            await this.account.deleteSessions()
            
        } catch (error) {
            console.log(error)
        }
    }
}


const authService = new AuthService()


export default authService







