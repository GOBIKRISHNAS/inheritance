// iPhone12 has some features which is defined using te class iPhone12
class iPhone12{
    constructor(features){
        this.features = features
    }
    present(){
        var str = "<li><img src = '"+this.features.img+"'></li>";
        for(var i=0;i<Object.keys(this.features).length-1;i++){
            str = str + "<li>" + Object.keys(this.features)[i] + " : " + Object.values(this.features)[i] + "</li>";
        }
        return str
    }
}

// iPhone12Pro has the same features as iPhone12 and also incorporates some additional fields as well
class iPhone12Pro extends iPhone12{

    //additional feature available in iPhone12pro
    additional(){
        return "<li>Add-on: " + "LiDAR Scanner for Night mode portraits, faster autofocus in low light and next-level AR experiences" + "</li>";
    }
    show(){
        return this.present() + this.additional();
    }
}

var phone = new iPhone12({"display": "6.1","network": "5G","battery" : "Up to 17 hours of video playback3", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXK_mbOciKGL-y5Z8sFbOCaYGb28Bc4T2FUrw7qPHwKpSnMgOCB-17miHZygd91r1ENdKXLU&usqp=CAc"})
var phone1 = new iPhone12Pro({"display": "6.1","network": "5G","battery" : "Up to 17 hours of video playback3","img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNLqFfxREUZswjjeV-BG74pC8jGHly62_w5X-oot49yBXH51Q0DeJAQ74_cfLeD48Cd5IJyg&usqp=CAc"})

document.getElementById("iphone-list").innerHTML= phone.present()
document.getElementById("iphonepro-list").innerHTML= phone1.show()
