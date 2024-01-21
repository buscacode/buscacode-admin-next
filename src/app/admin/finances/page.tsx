'use client'
import type { Metadata } from 'next';
import styles from './styles.module.css'
import { useLayoutStore } from '~/store/layout.store';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
//   title: 'Finances | Buscauth',
//   description: 'Sitio para las finanzas.',
// }

const FinancePage = () => {
  const { toggleSidebar } = useLayoutStore();
  // console.log("sidebarOpened: ", sidebarOpened);
  const [mainData, setMainData] = useState(null)

  const fetchCharacter = () => {
    fetch('https://rickandmortyapi.com/api/character/361')
      .then((res) => res.json())
      .then(data => setMainData(mainData=> mainData = data))
      .catch(err=>console.warn(err))

    console.log("Esta es una petición::::::");

  }

  const onClick = () => {

  }

  useEffect(()=>{
    fetchCharacter()
  }, [])


  // useEffect(()=>{
  //   fetchCharacter()
  //   return;
  // })

  return (
    <div className={styles['finance-page']}>
      {/* <h1> Iniciar Sesión</h1>

      <div style={{width: '100px', lineBreak: 'strict', display: 'block'}}>{ JSON.stringify(mainData) }</div> */}
    </div>
  )
}

export default FinancePage;
