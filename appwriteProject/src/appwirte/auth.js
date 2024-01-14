import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email, password});
            } else{
                return userAccount;
            }
        } catch(error){
            console.log(error);
        }
    }

    async login({email, password}){
        try{
            await this.account.createEmailSession(email, password);
        } catch (error){
            console.log(error);
        }

        }
        async getCurrentUser(){
            try{
                await this.account.get();
            } catch (error){
                console.log(error);
            }   
            return null;
        }
        async logout(){
            try{
                await this.account.deleteSessions();
            } catch (error){
                console.log(error);
            }
        }   
    }
const autoService = new AuthService();

export default autoService;