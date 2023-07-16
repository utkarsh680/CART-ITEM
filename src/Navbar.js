import React from "react";

const Navbar = (props) => {
    const {count} = props;
        return (
            <div style = {styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style = {styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/3037/3037281.png" alt ="cart"/>
                    <span style={styles.cartCount}>{count}</span>
                </div>
            </div>
        )
    }
const styles = {
    cartIcon:{
        height:60,
        marginRight:50
    },
    nav:{
        height:90,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:-21,
    },
    cartIconContainer:{
        position:'relative',
        
    },
    cartCount:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:22,
        background:'yellow',
        borderRadius:'50%',
        height:40,
        width:40,
        position:'absolute',
        right:22,
        top:-6
    }
}

export default Navbar;