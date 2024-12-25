import { Fixture } from "./POManager/POFixture";

export class HomePage extends Fixture {
    // The setup method is where we initialize and define the elements that we will interact with on the Home Page
    setup(){
        this.lnkSignupLogin = this.page.getByRole('link',{name:' Signup / Login'});
        this.inputName = this.page.getByRole('textbox',{name:' name'});
        this.inputEmailAddress = this.page.getByRole('textbox',{name:' email'});
        this.lnkProducts = this.page.getByRole('link',{name:'Products'});     
        this.lnkLogout = this.page.getByRole('link',{name:'Logout'});  
    }
}