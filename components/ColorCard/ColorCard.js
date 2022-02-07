import styles from './ColorCard.module.css'
import Image from 'next/image'
export default function ColorCard({color, locked}) {
   
    return (
        <div className="card m-4 p-2">
            <div className="d-flex justify-content-end p-2">
                <Image
                src={locked ? "/../public/lock-fill.svg" : "/../public/unlock.svg" } 
                width={20}
                height={20}
                alt="save color" />
            </div>
            <style jsx>{`
                .cardBgColor {
                background: ${color};
                }
                .card-color{
                    color: ${color};
                }
            `}</style>
            <div className={styles.cardColorBody}>
                <div className={`cardBgColor ${styles.cardColor} mb-4`} >
                   
                </div>
                <h5 className="card-title card-color">{color}</h5>
                
            </div>
        </div>
        
    )
}