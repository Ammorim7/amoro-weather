import { useState } from 'react';
import styles from './Daily.module.css'

function Daily({object}){
    let tempo = `https://openweathermap.org/img/wn/${object.weather[0].icon}@4x.png`
    let data = new Date(object.dt * 1000)
    var dia;
    switch (data.getDay()) {
        case 0:
          dia = "Seg";
          break;
        case 1:
          dia = "Ter";
          break;
        case 2:
           dia = "Qua";
          break;
        case 3:
          dia = "Qui";
          break;
        case 4:
          dia = "Sex";
          break;
        case 5:
          dia = "Sab";
          break;
        case 6:
          dia = "Dom";
          break;
        default:
            dia = 'a'
      }
    return <div className={styles.containerDia}>
        <img src={tempo} alt="" width='100px' />
        <div className={styles.containerDiaInfo}>
            <h1>{dia}</h1>
            <h2>{object.weather[0].description}</h2>
            <h3>{Math.round(object.temp.min)}° - {Math.round(object.temp.max)}°</h3>
        </div>
    </div>
}

export default Daily;