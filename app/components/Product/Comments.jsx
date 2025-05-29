import { useState } from "react";
import classes from "./Comments.module.css";

const comments = [
  {
    name: 'Shahnoza',
    rating: '⭐⭐⭐⭐',
    date: '30-iyul',
    comment: 'Mahsulot yaxshi lekin ishlatishga sal noqulay ekan.'
  },
  {
    name: 'Umida ',
    rating: '⭐⭐⭐⭐⭐',
    date: '28-iyul',
    comment: 'Mahsulot sifatiga gap yoq.'
  },
  {
    name: 'Malika',
    rating: '⭐⭐⭐⭐⭐',
    date: '26-iyul',
    comment: 'Mahsulot ajoyib.'
  },
  {
    name: 'Gulnoza',
    rating: '⭐⭐⭐⭐⭐',
    date: '24-iyul',
    comment: 'Mahsulot 100% puliga arziydi.'
  },{
    name: 'Nigina',
    rating: '⭐',
    date: '23-iyul',
    comment: 'Sifatsiz ekan.'
  },
  {
    name: 'Mubina',
    rating: '⭐⭐⭐',
    date: '21-iyul',
    comment: "Bunaqasidan ishlatib ko'rganman. Ko'pga chidamaydi"
  },
  {
    name: 'Shaxlo',
    rating: '⭐⭐⭐⭐',
    date: '18-iyul',
    comment: null
  },
  {
    name: 'Mohidil',
    rating: '⭐⭐⭐',
    date: '15-iyul',
    comment: "Chidasa bo'ladi."
  },
  {
    name: 'Sevinch',
    rating: '⭐⭐⭐⭐',
    date: '11-iyul',
    comment: 'Haqqatdan ham sal noqulay ekan. Lekin ishlashi yaxshi.'
  }
  ,{
    name: 'Muhlisa',
    rating: '⭐⭐⭐⭐⭐',
    date: '7-iyul',
    comment: 'Juda ham ajoyib.'
  },
  {
    name: "Go'zal",
    rating: '⭐',
    date: '3-iyul',
    comment: 'Odamlarni aldab sotishayabdi.'
  },
  {
    name: null,
    rating: '⭐',
    date: '29-iyun',
    comment: 'Mahsulot puliga arzimaydi.'
  }
]

export default function Comments() {
  const [more, setMore] = useState(5);
  return (
    <div className={classes.comments}>
      <h1 style={{textAlign: 'center'}}>Xaridorlar fikri</h1>
      {comments.slice(0, more).map((commentator,index)=>(
        <div className={classes.userComment} key={index + 'comment'}>
        <div className={classes.name}>
          <p>{commentator.name || 'Foydalanuvchi123'}</p>
          <p>{commentator.rating}</p>
        </div>
        <p className={classes.date}>{commentator.date}</p>
        <p className={classes.comment}>{commentator.comment}</p>
        <p className={classes.owner}>Sotuvchining javobi</p>
        <p className={classes.answerOfOwner}>Sharh uchun juda katta Rahmat!!!</p>
      </div>
    ))}
      <button 
        className={classes.moreCommentBtn} 
        style={comments?.length <= more ? {display: "none"} : {}}
        onClick={() => setMore(prev => prev + 5)}
      >
        Ko'proq ko'rsatish
      </button>
    </div>
    );
}
