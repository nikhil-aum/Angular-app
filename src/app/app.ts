import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Register } from './register/register';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CommonModule, NgFor } from '@angular/common';
import { SearchBox } from './search-box/search-box';
import { Child } from './child/child';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { CurrencyConverterPipe } from './custom-pipe/currency-converter-pipe';

@Component({
  imports: [RouterOutlet,Profile,Login,Register,FormsModule,CommonModule,NgFor,SearchBox,Child,DisplayCount,ControlCount,TrimTextPipe,CurrencyConverterPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
  name = "Anil Verma"
  email = "anil@12gmail.com"

  getSum(a:number,b:number){
    return a+b;
  }

  count =0;

  counter(action:string){
    if(action=='minus'){
      this.count>0 && this.count--
    }else{
      this.count++
    }
  }

  handleEvent(eventName:any){
    console.log(eventName);
    
  }








  btnDisable = false;

  toggle(){
    this.btnDisable=!this.btnDisable;
  }


  inputReadOnly = false;

  data = 10;
  counts = signal(0)

  // constructor(){
  //   effect(()=>{
  //     //console.log("this is data ",this.data);
  //     console.log("this is count",this.counts());
  //     if(this.counts()==10){
  //         this.counts.set(0)
  //     }
       
  //   })
  // }

  updateData(){
    this.data++
  }

  updateCount(){
    this.counts.set(this.counts()+1)
  }


  height = signal(100);
  width = signal(20);

  area = computed(()=>this.height()*this.width());

  // constructor(){
  //   effect(()=>{
  //     console.log("area is : ", this.area());
      
  //   })
  // }

  handleHeight(){
    this.height.set(this.height()+10);
  }


  speed = signal(0)
  color = "black"

   constructor(){
     effect(()=>{
          if(this.speed()>0 && this.speed()<80){
            this.color='green'
          }

          if(this.speed()>=80 && this.speed()<120){
            this.color='orange'
          }

          if(this.speed()>=120){
            this.color='red'
          }

          console.log("speed :"+this.speed())
     })
   }

   increaseSpeed(){
    this.speed.set(this.speed()+10)
   }


  //  data1:WritableSignal<string | number | boolean> = signal("anil")
  //  //users:WritableSignal<string[]> = signal(['anil','aakash','amit'])

  //  handleData(){
  //     //this.data1.set(true)
  //     this.users.update((item)=>[...item,'bruce'])
  //     console.log(this.users());
      
  //  }

   name1:WritableSignal<string> = signal('')

   resetValue(){
    this.name1.set("Mohan verma")
   }

   setValue(val:string){
    this.name1.set(val)
   }









   isLogin = signal(false)

   handleLogin(status:boolean){
    this.isLogin.set(status)
   }

   show = signal(true)

  status = signal<string>('notStarted');

  handleStatus(event: Event){
    const target = event.target as HTMLSelectElement;
    this.status.set(target.value);
  }

  users = signal(["Anil","Mohan","Manish","Vinay"])

  userDetails = signal([
    {id:1,name:"Anil",surname:"sidhu",email:"anil@gmail.com"},
    {id:2,name:"Mohan",surname:"sharma",email:"mohan@gmail.com"},
    {id:3,name:"Manish",surname:"roy",email:"manish@gmail.com"},
    {id:4,name:"Vinay",surname:"patidar",email:"vinay@gmail.com"}
  ])

  status1 = signal("notStarted");
   handleSwitch(event: Event){
    const target = event.target as HTMLSelectElement;
    this.status1.set(target.value);
  }

  name2 = signal("rahul verma")
  age1 = 20

  userData = signal({
    name:"anil sindhu", 
    age:25,
    email:"anil@gmail.com"
  })

  updateUserData(key:string,val:string){
      this.userData.update((item=>({...item,[key]:val})))
    
  }

  userName = signal("Mohan Verma")

  get uName(){
    return this.userName();
  }

  set uName(val:string){
    this.userName.set(val)
  }







  tasks = signal([
    {id:0,title:"Team lunch",completed:false}
  ])

  title=signal('')

  addTask() {
    if (this.title()) {
      this.tasks.update((item) => ([
        ...item, { id: this.tasks().length, title: this.title(), completed: false }
      ]))
      this.title.set('')
    }
  }
  deleteTask(id:number){
    this.tasks.update((tasks)=>tasks.filter((task)=>task.id!=id))
  }



  isLogin1=signal(false);
  employees = signal(["anil","amit","john","Elaa"])

  pColor="red"







  students = signal(['Anil','Peter','shyam','kunal'])
  newStudent = signal('')
  

 addNewStudent() {

  if (this.newStudent()) {
    this.students.update(data => [...data, this.newStudent()]);
  }
  this.newStudent.set('');
   }

   selectStudentName=signal('')

   selectedStudent(name:string){
    
    this.selectStudentName.set(name)
    
   }

   deleteStudent(name:string){
     console.log(name);
     this.students.update((data)=>data.filter((item)=>item!=name))
   }

   heading = "Angular 22 Complete tutorial"
   technology = signal(" ")

   amount = 10000;
   mobile = "vivo"
   today = new Date()

   user = signal({name:'anil',age:29,email:"code@12@gmail.com"})



   title1 = signal("Angular working This tutorial by code step by step")
   school = signal("Sanskar Bharti niketan ")

   price = signal(20)
}

   

  

  
