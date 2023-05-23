import Page_Interface from "./Page_Interface.js";

export default class extends Page_Interface {
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
        <div>
            <h1> Welcome to Dashboard </h1>
            shgfjgkgy
        </div>
        `;
    }
}