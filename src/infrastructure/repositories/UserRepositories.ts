import { UserModel } from "../../entities_models/userModel";
import { IUserRepository } from "../../interfaces/iRepositories/iUserRepository";
import { User } from "../../interfaces/model/user";
import UserOutPut from "../../interfaces/model/userOutPut";
import bcrypt from "bcrypt";

class UserRepository implements IUserRepository {

    async insertOne(user: User): Promise<User> {
        try {
            console.log('Incoming user data:', user);

         

            const newUser = new UserModel({
                ...user,
              
            });
            await newUser.save();
            console.log('User saved successfully:', newUser);
            return newUser;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }

    async findByEmail(email: string): Promise<User | null> {
        try {
            const user = await UserModel.findOne({ email });
            console.log(user,'dbsuer')
            if (!user) {
                console.error('User not found with email:', email);
                return null;
            }
            return user;
        } catch (error) {
            console.error('Error finding user by email:', error);
            throw new Error('Error finding user by email');
        }
    }

    async findById(id: string): Promise<User | null> {
        try {
            const user = await UserModel.findById(id).exec();
            return user ? user.toObject() : null;
        } catch (error) {
            console.error('Error finding user by ID:', error);
            throw error;
        }
    }

    async updateRole(userId: string, role: 'user' | 'seller') {
        try {
            const user = await UserModel.findById(userId).exec(); 
            console.log('Output:this is the seller changing area ', user);
            
            if (user) {
                user.role = role;
                if (role === 'seller') {
                    user.isSeller = true; 
                }
                await user.save();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error updating user role:', error);
            return false;
        }
    }
    async updatePassword(email:string,password:string): Promise<User | null> {
        try {
            const result = await UserModel.findOneAndUpdate(
                { email },
                { $set: { password } },
                { new: true } 
            );            console.log(result, 'userUpdateResult');
            return result;
        } catch (error) {
            console.error('Error updating user:', error);
            throw new Error('Error updating user');
        }
    }
    
}

export default UserRepository;
