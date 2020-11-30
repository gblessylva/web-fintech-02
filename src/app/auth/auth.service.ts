import { Injectable } from '@angular/core';
import { User} from '../../app/components/login/user';
import { MessageService} from '../../app/components/message/message.service';
@Injectable()
export class AuthService {

  constructor(private messageService: MessageService) { }

  currentUser: User;
  redirectUrl: string;

  // # this is your work. You can reuse and update mine as you like
    public isAuthenticated(): boolean {
        const token =localStorage.getItem('authToken')
        if(token){
          return true
        }else{
          return false
        }
      }
      login(userName: string, password: string): void {
        if (!userName || !password) {
          this.messageService.addMessage('Please enter your userName and password');
          return;
        }
        if (userName === 'admin') {
          this.currentUser = {
            id: 1,
            userName,
            isAdmin: true,
            email: null

          };
          this.messageService.addMessage('Admin login');
          return;
        }
        this.currentUser = {
          id: 2,
          userName,
          isAdmin: false,
          email: null
        };
        this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
      }

      logout(): void {
        this.currentUser = null;
      }

      registerSME 

    }

    