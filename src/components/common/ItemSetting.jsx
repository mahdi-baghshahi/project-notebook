import React from 'react'
import Styledtext from './styled-text/Styledtext'
import styles from './ItemSetting.module.css'
import { Link } from 'react-router-dom'


export default function ItemSetting({targetPath  ,lable , textitem , IconComponent ,IconComponentlable, textColor}) {
  return (

    <Link to={targetPath} className={styles.itemsetting} >
        <div className={styles.leftContent}>
            {IconComponent && <IconComponent className={styles.icon}  />} 
            
            <Styledtext variant={'h5'}   color={textColor}>{textitem}</Styledtext>
        </div>
        <div className={styles.itemlable}>
            <Styledtext variant={'p1'}>{lable}</Styledtext>
            {IconComponentlable && <IconComponentlable className={styles.icon}  />} 
        </div>
    </Link>
  )
}
