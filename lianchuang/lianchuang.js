window.onload=function  () {
	// body...
	addLoadEvent(getWH());
	addLoadEvent(scrollslide());

		
}

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

//获取宽高
function getWH(){
	var wrapper=document.getElementById('homepage');
	var imgslide=document.getElementById('imgslide');
	var imgslidediv=imgslide.getElementsByTagName('div');
  var menuL=document.getElementById('menuLeft');
	for(var i=0;i<imgslidediv.length;i++){
		imgslidediv[i].style.height=document.documentElement.clientHeight+'px';
	}
	wrapper.style.height=document.documentElement.clientHeight+'px';
	wrapper.style.width=document.documentElement.clientWidth+'px';
  menuL.style.width=document.documentElement.clientWidth-584+'px';
}

//滚动触发幻灯片
function scrollslide(){
	window.index=0;
	var move=document.documentElement.clientHeight;
  var move2=document.documentElement.clientWidth;
  var m=document.documentElement.clientHeight;
	var imgslide=document.getElementById('imgslide');
	var section=document.getElementsByTagName('section');
 //-------2-------------------2------------------2---------------2--------
  var introbutton=document.getElementById('introbutton');
  var introB=introbutton.getElementsByTagName('a');
  var introLeft=document.getElementById('introductionLeft');
  var introRight=document.getElementById('introductionRight');
  var imgInt=introLeft.getElementsByTagName('div');
  var textop=introRight.getElementsByTagName('div');
  //------------------3----------------3----------------3-----------------
  var groupsList=document.getElementById('groupsList');
  var groupA=groupsList.getElementsByTagName('a');
  var groupsright=document.getElementById('groupsright');
  var Gdiv=groupsright.getElementsByTagName('div');
  //---------4-------------------4------------------4----------------------
  var eventList=document.getElementById('eventList');
  var eventA=eventList.getElementsByTagName('a');
  var events=document.getElementById('greatEvent');
  var round=events.getElementsByTagName('div');
  var greatEventmain=document.getElementById('greatEventmain');
  var imgcontent=greatEventmain.getElementsByTagName('div');
  var imgLR=imgcontent[4].getElementsByTagName('div');
  var imgLR2=imgcontent[7].getElementsByTagName('div');
  var imgLR3=imgcontent[36].getElementsByTagName('div');
  var imgnum=imgcontent[10].getElementsByTagName('div');
  var imgLRM=imgcontent[29].getElementsByTagName('div');
  //-------5-------------------5------------------5---------------5-----------
  var workL=document.getElementById('workList');
  var workA=workL.getElementsByTagName('a');
  var gallery=document.getElementById('gallery');
  var galleryImg=gallery.getElementsByTagName('img')[0];
  gallery.style.width=4*(galleryImg.offsetWidth)+'px';
  var worksList=document.getElementById('worksList');
  worksList.style.width=10*move2+'px';
  var everywork=worksList.getElementsByTagName('div');
  for(var i=0;i<=9;i++){
    everywork[i].style.width=move2+'px';
  }
  var workstext=document.getElementById('workstext');
  var a=workstext.style.width=0.5*move*1856/1063+'px';
  var leau=document.getElementById('rouleau');
  var leauO=document.getElementById('leauO');
  //------------6-----------------------6-------------------------6--------------
  var aboutList=document.getElementById('aboutList');
  var aboutA=aboutList.getElementsByTagName('a');
  var aboutW=document.getElementById('aboutW');
   
  //-----------------------------------------------------------------------------------------------
	var scrollFunc=function(e){ 
		e=e || window.event; 
    if(e.wheelDelta){//IE/Opera/Chrome 
      if(e.wheelDelta>0){//向上滚动事件
          if(index==28){
            var time=setInterval(function(){
              if(section[4].offsetTop>=0){
                clearInterval(time);
                section[4].style.top=0;
              }
              else section[4].style.top=section[4].offsetTop+20+'px';
            },30);
          }
          else if(index==18){
            var time=setInterval(function(){
                if(section[3].offsetTop>=0){
                clearInterval(time);
                section[3].style.top=0;
              }
              else section[3].style.top=section[3].offsetTop+20+'px';
              },30);
          }
          else if(index==9){
            var time=setInterval(function(){
                if(section[2].offsetTop>=0){
                  clearInterval(time);
                  section[2].style.top=0;
                }
                else section[2].style.top=section[2].offsetTop+20+'px';
            },30);
            //round[0].style.top=parseInt(0.45*move)+'px';
            //imgcontent[0].style.opacity=1;
          }//第三个幻灯片结束
          else if(index==3){
            var time=setInterval(function(){
                if(section[1].offsetTop>=0){
                clearInterval(time);
                section[1].style.top=0;
              }
              else section[1].style.top=section[1].offsetTop+20+'px';
              },30);
            //animove(Gdiv[0],{opacity:100},40);
          }//第二个幻灯片结束
          else if(index==1){
            var time=setInterval(function(){
                if(section[0].offsetTop>=0){
                  clearInterval(time);
                  section[0].style.top=0;
                }
                else section[0].style.top=section[0].offsetTop+20+'px';
            },30);
            //animove(textop[0],{opacity:100},1);
          }//第一个幻灯片结束
          //------------------------------------section-----------------end--------------------
          else if(index==29){
            onbutton(aboutA,index-28);
            animove(aboutW,{top:0},35);
          }
          else if(index>=19&&index<=27){
            animove(gallery,{left:(19-index)*500},40);
            setTimeout(function(){
               animove(worksList,{left:(18-index)*move2},40);
            },35)
            onbutton(workA,index-18);
            if(index==21){
              leau.style.width=141+'px';
            }
            if(index==22){
              leau.style.width=180+'px';
            }
            else if(index==23){
               leau.style.width=161+'px';
            }
            else if(index==24){
               leau.style.width=221+'px';
            }
            else if(index==25){
               leau.style.width=283+'px';
            }
            else if(index==26){
               leau.style.width=218+'px';
            }
            else if(index==27){
               leau.style.width=161+'px';
            }
          }
          else if(index>=10&&index<=17){//greatEvent轮播    这一段简直有毒！
           //animove(round[index-9],{top:move},20,function(){
             //   animove(round[index-10],{top:parseInt(0.45*move)},20);
            //});
            onbutton(eventA,index-9);/*
            if(index>=10&&index<=12){
              animove(imgcontent[index-9],{opacity:0},20,function(){
                animove(imgcontent[index-10],{opacity:100},20);
              });
            }
            if(index==13){ 
              animove(imgLR[0],{opacity:0},20,function(){
                animove(imgLR[1],{opacity:0},20,function(){
                  animove(imgcontent[index-10],{opacity:100},30);
                })
              })
            }
            else if(index==14){
              animove(imgLR2[0],{opacity:0},10,function(){
                animove(imgLR2[1],{opacity:0},10,function(){
                  animove(imgLR[0],{opacity:100},30,function(){
                    animove(imgLR[1],{opacity:100},30);
                  })
                })
              })
            }
            else if(index==15){
               animove(imgnum[0],{opacity:0},10,function(){
                animove(imgnum[2],{opacity:0},10,function(){
                  animove(imgnum[4],{opacity:0},5,function(){
                    animove(imgnum[10],{opacity:0},5,function(){
                      animove(imgnum[16],{opacity:0},5,function(){
                        animove(imgnum[14],{opacity:0},5,function(){
                          animove(imgnum[12],{opacity:0},5,function(){
                            animove(imgnum[6],{opacity:0},5,function(){
                              animove(imgnum[8],{opacity:0},5,function(){
                                animove(imgLR2[0],{opacity:100},5,function(){
                                  animove(imgLR2[1],{opacity:100},5);
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            }
            else if(index==16){
              animove(imgLRM[0],{opacity:0},5,function(){
                animove(imgLRM[2],{opacity:0},5,function(){
                  animove(imgLRM[4],{opacity:0},5,function(){
                    animove(imgnum[0],{opacity:100},5,function(){
                      animove(imgnum[2],{opacity:100},5,function(){
                        animove(imgnum[4],{opacity:100},5,function(){
                          animove(imgnum[10],{opacity:100},5,function(){
                            animove(imgnum[16],{opacity:100},5,function(){
                              animove(imgnum[14],{opacity:100},5,function(){
                                animove(imgnum[12],{opacity:100},10,function(){
                                  animove(imgnum[6],{opacity:100},10,function(){
                                    animove(imgnum[8],{opacity:100},10);
                                  })
                                })
                              });
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            }
            else if(index==17){
              animove(imgLR3[0],{opacity:0},10,function(){
                animove(imgLR3[1],{opacity:0},10,function(){
                  animove(imgLRM[0],{opacity:100},30,function(){
                    animove(imgLRM[2],{opacity:100},30,function(){
                      animove(imgLRM[4],{opacity:100},30)
                    })
                  });
                })
              })
            }//index==17  */
          }//greatEvent轮播结束
         
          else if(index>=4&&index<=8){
            var target=move*(4-index);
            animove(imgslide,{top:target},40);
            if(Gdiv[index-3].getElementsByTagName('div')){
              animove(Gdiv[(index-3)*2],{opacity:0},40);
              animove(Gdiv[(index-4)*2],{opacity:100},40);   
            }
            onbutton(groupA,index-3);
          }//groups轮播结束
          else if(index==2){
            imgInt[1].style.transform="rotateX(360deg)";
            setTimeout(function(){
              imgInt[3].style.transform="rotateX(360deg)";
            },100)
            setTimeout(function(){
              imgInt[5].style.transform="rotateX(360deg)";
            },200)
            animove(textop[1],{opacity:0},10,function(){
              animove(textop[0],{opacity:100},10);
            });
            onbutton(introB,1);
          }
          else if(index<=0) index=1;
          index--;
    	}//向上滚动事件结束


    	if(e.wheelDelta<0) {//向下滚动事件
          index++;
    		  if(index==1){
    				var time=setInterval(function(){
      					if(section[0].offsetTop<=-move){
    						  clearInterval(time);
    						  section[0].style.top=-move+'px';
    					  }
    					  else section[0].style.top=section[0].offsetTop-20+'px';
      			},30);
            animove(textop[0],{opacity:100},1);
    		  }//第一个幻灯片结束
    			else if(index==3){
    				var time=setInterval(function(){
      					if(section[1].offsetTop<=-move){
    						clearInterval(time);
    						section[1].style.top=-move+'px';
    					}
    					else section[1].style.top=section[1].offsetTop-20+'px';
      				},30);
            animove(Gdiv[0],{opacity:100},40);
    			}//第二个幻灯片结束
    			else if(index==9){
    				var time=setInterval(function(){
      					if(section[2].offsetTop<=-move){
    						  clearInterval(time);
    						  section[2].style.top=-move+'px';
    					  }
    					  else section[2].style.top=section[2].offsetTop-20+'px';
      			},30);
            round[0].style.top=parseInt(0.45*move)+'px';
            imgcontent[0].style.opacity=1;
    			}//第三个幻灯片结束
    			else if (index==18){
    				var time=setInterval(function(){
      					if(section[3].offsetTop<=-move){
    						clearInterval(time);
    						section[3].style.top=-move+'px';
    					}
    					else section[3].style.top=section[3].offsetTop-20+'px';
      				},30);
    			}//第四个幻灯片结束
    			else if(index==28){
    				var time=setInterval(function(){
      					if(section[4].offsetTop<=-move){
    						clearInterval(time);
    						section[4].style.top=-move+'px';
    					}
    					else section[4].style.top=section[4].offsetTop-20+'px';
      				},30);
    			}//第五个个幻灯片结束
          //-------------------------------------------大的页面切换完-------------------
          else if(index==2){//introduction-interval
            imgInt[1].style.transform="rotateX(180deg)";
            setTimeout(function(){
              imgInt[3].style.transform="rotateX(180deg)";
            },100)
            setTimeout(function(){
              imgInt[5].style.transform="rotateX(180deg)";
            },200)
            animove(textop[0],{opacity:0},10,function(){
              animove(textop[1],{opacity:100},10);
            });
            onbutton(introB,2);
          }//introduction-interval完
    			else if(index>=4&&index<=8){//groups轮播
    				var target=-move*(index-3);
    				animove(imgslide,{top:target},40);
            if(Gdiv[index-3].getElementsByTagName('div')){
              animove(Gdiv[(index-4)*2],{opacity:0},40);
              animove(Gdiv[(index-3)*2],{opacity:100},40);   
            }
            onbutton(groupA,index-2);
    			}//groups轮播结束
          else if(index>=10&&index<=17){//greatEvent轮播
            animove(round[index-10],{top:-200},20,function(){
               animove(round[index-9],{top:parseInt(0.45*move)},20);
            });
            onbutton(eventA,index-8);
            if(index>=10&&index<=12){
              animove(imgcontent[index-10],{opacity:0},20,function(){
                animove(imgcontent[index-9],{opacity:100},20);
              });
            }
            else if(index==13){ 
              animove(imgcontent[index-10],{opacity:0},20,function(){
                animove(imgLR[0],{opacity:100},30,function(){
                  animove(imgLR[1],{opacity:100},30);
                })
              })
            }
            else if(index==14){
              animove(imgLR[0],{opacity:0},10,function(){
                animove(imgLR[1],{opacity:0},10,function(){
                  animove(imgLR2[0],{opacity:100},30,function(){
                    animove(imgLR2[1],{opacity:100},30);
                  })
                })
              })
            }
            else if(index==15){
               animove(imgLR2[0],{opacity:0},10,function(){
                animove(imgLR2[1],{opacity:0},10,function(){
                  animove(imgnum[0],{opacity:100},5,function(){
                    animove(imgnum[2],{opacity:100},5,function(){
                      animove(imgnum[4],{opacity:100},5,function(){
                        animove(imgnum[10],{opacity:100},5,function(){
                          animove(imgnum[16],{opacity:100},5,function(){
                            animove(imgnum[14],{opacity:100},5,function(){
                              animove(imgnum[12],{opacity:100},5,function(){
                                animove(imgnum[6],{opacity:100},5,function(){
                                  animove(imgnum[8],{opacity:100},5);
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            }
            else if(index==16){
              animove(imgnum[0],{opacity:0},5,function(){
                animove(imgnum[2],{opacity:0},5,function(){
                  animove(imgnum[4],{opacity:0},5,function(){
                    animove(imgnum[10],{opacity:0},5,function(){
                      animove(imgnum[16],{opacity:0},5,function(){
                        animove(imgnum[14],{opacity:0},5,function(){
                          animove(imgnum[12],{opacity:0},5,function(){
                            animove(imgnum[6],{opacity:0},5,function(){
                              animove(imgnum[8],{opacity:0},5,function(){
                                animove(imgLRM[0],{opacity:100},10,function(){
                                  animove(imgLRM[2],{opacity:100},10,function(){
                                    animove(imgLRM[4],{opacity:100},10);
                                  })
                                })
                              });
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            }
            else if(index==17){
              animove(imgLRM[0],{opacity:0},10,function(){
                animove(imgLRM[2],{opacity:0},10,function(){
                  animove(imgLRM[4],{opacity:0},10,function(){
                    animove(imgLR3[0],{opacity:100},30,function(){
                      animove(imgLR3[1],{opacity:100},30)
                    })
                  });
                })
              })
            }//index==17 
          }//greatEvent轮播结束
          else if(index>=19&&index<=27){
            animove(gallery,{left:-(index-18)*500},40);
            setTimeout(function(){
               animove(worksList,{left:-(index-18)*move2},40);
            },35)
            onbutton(workA,index-17);
            //index一一取值只为改变卷帘位置
            if(index==21){
              leau.style.width=180+'px';
            }
            else if(index==22){
               leau.style.width=161+'px';
            }
            else if(index==23){
               leau.style.width=221+'px';
            }
            else if(index==24){
               leau.style.width=283+'px';
            }
            else if(index==25){
               leau.style.width=218+'px';
            }
            else if(index==26){
               leau.style.width=161+'px';
            }
            else if(index==27){
               leau.style.width=174+'px';
            }
          }
          else if(index==29){
            onbutton(aboutA,index-27);
            animove(aboutW,{top:-move},35);
          }
          else if(index>29) index=29;
        }//向下滚动事件结束
    	}
  	}
  		
      /*考虑到其它地方和chrome一样，此处省略
      else if(e.detail){//Firefox 
    		if(e.detail==-3) { //向上滚动事件<br> 
      			
    		}
    		else {//向下滚动事件<br>
      			
      		} 
  		} 
      */
 	
	//添加事件
  
  
	  if(document.addEventListener){ 
  		//adding the event listerner for Mozilla
   		document.addEventListener("DOMMouseScroll" ,scrollFunc, false);
	  }
   	 //IE/Opera/Chrome 
   		window.onmousewheel=scrollFunc;//document.onmousewheel的区别
}


//动画函数
function animove(obj,json,time,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		//1.读当前值
		for(var attr in json){ 
			var icur=0;
      if(attr=='opacity')
        icur=Math.round(parseFloat(getStyle(obj,attr)*100));
      else
			 icur=parseInt(getStyle(obj,attr));
			//2.算速度
			var iSpeed=(json[attr]-icur)/5;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			//3. 检测停止
			if(icur==json[attr]){
				clearInterval(obj.timer);
        if (fn) {fn()};
			}
			else{
				if (attr=='opacity') {
					obj.style.filter='alpha(opacity:'+(icur+iSpeed)+')';
					obj.style.opacity=(icur+iSpeed)/100;
				}
				else obj.style[attr]=icur+iSpeed+'px';
			}
		}
	},time)
}

function getStyle(obj,attr){
	if(obj.currentStyle)
		return obj.currentStyle[attr];
	else
		return getComputedStyle(obj,false)[attr];
}

function onbutton(buttons,index){
  for(var i=0;i<buttons.length;i++)
  {
    if(buttons[i].className=='buttonOn')
      buttons[i].className='';
  }
  buttons[index-1].className='buttonOn';
}


function hide(){
  var menu=document.getElementById('menu');
  var globe=document.getElementById('globe');
  if(globe.style.display=="none"){
    menu.style.transform="translateY(-60px)";
    globe.style.display="block";
  }
  else{
    menu.style.transform="translateY(60px)";
    globe.style.display="none";
  }
}