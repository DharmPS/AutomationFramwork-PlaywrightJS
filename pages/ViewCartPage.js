import { Fixture } from "./POManager/POFixture";

export class ViewCartPage extends Fixture {
     // The setup method is where we initialize and define the elements that we will interact with on the ViewCartPage
    setup(){
        this.cartDescription = this.page.locator(`[class='cart_description'] h4`);
        this.cartPrice = this.page.locator(`[class='cart_price'] p`);
        this.cartQuantity = this.page.locator(`[class='cart_quantity'] button`);
        this.cartTotal = this.page.locator(`[class='cart_total'] p`);
    }
}