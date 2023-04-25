import { createStore } from "vuex";
const store= createStore({
    state:{
        araclar:[],
        arac_model:[],
        arac_yil:[],
        meslek:[]
        },
    mutations:{
        setAraclar(state,araclar){
            state.araclar=araclar;
        },
        setAracModel(state,arac_model){
            state.arac_model=arac_model;
        },
        setAracYil(state,arac_yil){
            state.arac_yil=arac_yil;
        },
        setMeslek(state,meslek){
            state.meslek=meslek;
        },
 
    },
    getters:{
        _getaraclar(state){
            const araclar=state.araclar
            return araclar
        },
        // _onChange(state){
        //    const aracM=state.arac_model;
        //    const aracS=state.araclar;
        //     aracM.forEach(i=>{
        //         if(i.model_arac_id===aracS.araclar_id){
        //            return i
        //         }
              
        //     })
           
        // }
    _onChange:(state)=>state.arac_model.filter((i)=>i.model_arac_id===state.araclar.araclar_id),

    _yazdir(state){
     const arac_model=state.arac_model;
     const araclar=state.araclar;
     let modelİd=[]
     let aracİd=[]
    //   let ortak=[]
     arac_model.forEach((i)=>{
 
      modelİd.push(i.model_arac_id);

     })
     araclar.forEach((j)=>{
        aracİd.push(j.araclar_id);
       
     })
     console.log(modelİd)
     console.log(aracİd)
     
     arac_model.filter((i)=>i.modelİd===araclar.aracİd)
   

    //  const kesisim = modelİd.filter(element => aracİd.includes(element));
    // console.log(kesisim)
    //  modelİd.filter(element =>{( aracİd.includes(element)){
    //        console.log(arac_model.element)
    //    }
    //  });
    
     
    }
}
});

export default store;