


// HVH
class DialogMaster{
    dialog;

    constructor(id){
        this.dialog = document.getElementById(id);
    }

    setDialog(message,okCallBack,cancelCallBack,showCancel = true,hideAfterOk = true,hideAfterCancel = true){
        this.dialog.children[0].innerHTML = message;
        if(showCancel){
            this.dialog.children[1].children[0].style.display = 'block';
        }else{
            this.dialog.children[1].children[0].style.display = 'none';
        }
        this.dialog.children[1].children[1].addEventListener('click',okCallBack);
        this.dialog.children[1].children[0].addEventListener('click',cancelCallBack);
        if(hideAfterOk){
            this.dialog.children[1].children[1].addEventListener('click',()=>{this.hide(), okCallBack()});
        }
        if(hideAfterCancel){
            this.dialog.children[1].children[0].addEventListener('click',()=>{this.hide(), cancelCallBack()});
        }
    }

    async show(){
        this.dialog.style.display = 'flex';
        await sleep(200);
        this.dialog.style.opacity = 1;
    }

    async hide(){
        this.dialog.style.opacity = 0;
        await sleep(200);
        this.dialog.style.display = 'none';
    }

}