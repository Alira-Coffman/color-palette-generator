import styles from './ColorCard.module.css'

export default function ColorCard() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return (
        <div className="card m-4 p-2">
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