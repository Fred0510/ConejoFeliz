var HelloWorldLayer = cc.Layer.extend({
    Bomb: [ ],
    Zanahoria: [ ],
    sprFondo:null,
    sprConejo:null,
    size: null,
    random : function getRandom(min, max){
      return(Math.random() * (max - min + 1)) + min;  
    },
    
      MoverConejo : function(location, event){
            cc.log("mover conejo");
            var juego = event.getCurrentTarget();
            var ubicacion = location.getLocation();
            juego.sprConejo.setPosition(ubicacion.x,juego.sprConejo.getPositionY());
        },
    
    creaZanahoria : function(){
        var carrot = new cc.Sprite(res.zanahoria_png);
       //carrot.setScale(0.4,0.4);
        carrot.setPosition(this.random((this.size.width/2)-220, (this.size.width/2)+220), this.size.height+100);
        this.addChild(carrot, 1);
        this.Zanahoria.push(carrot);
        var moveto = cc.moveTo(3,carrot.getPositionX(), -50);
        carrot.runAction(moveto);
        
    },
    creaBomba: function(){
		
		var bomb = new cc.Sprite(res.bomba_png);
		//bomb.setScale(0.4,0.4);
        bomb.setPosition(this.random((this.size.width/2)-220,(this.size.width/2)+220), this.size.height+100);
        this.addChild(bomb, 1);
		var moveto = cc.moveTo(3,bomb.getPositionX(), -50);
        bomb.runAction(moveto);
        this.Bomb.push(bomb);	
	},
    ctor:function () {
        this._super();
        //Obteniendo el tamaño de la pantalla
        var size = cc.winSize;
        this.size = size;

        //posicionando la imagen de fondo
        this.sprFondo = new cc.Sprite(res.fondo_png);
        this.sprFondo.setPosition(size.width / 2,size.height / 2);
        this.addChild(this.sprFondo, 0);
        
        //posicionando la imagen de fondo
        this.sprConejo = new cc.Sprite(res.conejo_png);
        this.schedule(this.creaBomba,1);
        this.schedule(this.creaZanahoria,1);
        this.sprConejo.setPosition(size.width / 2,size.height * 0.15);
        this.addChild(this.sprConejo, 1);

       
//        if ('touches' in sys.capabilities){
//            this.setTouchMode(cc.TOUCH_ONE_BY_ONE);
//            this.setTouchEnabled(true);
//            
//            
//        }

        var conejo = function(){
         this.sprConejo = new cc.Sprite(res.conejo_png);
        this.sprConejo.setPosition(size.width / 2,size.height * 0.15);
        this.addChild(this.sprConejo, 1);
            
    }
        
        
//        cc.ActionManager.conejo = this;
//        cc.ActionManager.right = this.right;
//        cc.ActionManager.left = this.left;
        
         cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
//             onTouchBegan : function(touch, event){
//                 
//               cc.log("touch done" + touch.getLocationX(this.MoverConejo));
//                 
//                 return true;
//             },
//             
//              onTouchMoved : function(touch,event){
//                  
//                  cc.log("touch began:" + touch.getLocationX(this.MoverConejo));
//              }
             onTouchBegan: this.MoverConejo,
             onTouchMoved: this.MoverConejo
        },this);     

        return true;
    }
    
//    onTouchMoved:function(touch, event){
//        
//        cc.log("el toque se realizo");
//    },
    
//    right : function(conejo){
//        conejo.move(conejo, false);
//        
//    },
//    left : function(conejo){
//        conejo.move(conecjo,true);
//        
//    }
//    
//    move : function(conejo,right){
//        
//        conejo.Node_run
//    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

