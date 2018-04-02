const styles = {
    header: {
        minHeight: '60px',
        margin: '0',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid #DDD'
    },

    box: {
        first: {
            flex: '1 1 30%',
            textAlign: 'left',
        },
        
        second: {
            flex: '1 1 30%',
            textAlign: 'center',
        },
        
        third: {
            flex: '1 1 30%',
            textAlign: 'right',
        },
    },

    userPhoto: {
        width: '35px',
        height: '35px',
        borderRadius: '100%',
        display: 'inline-block',
        overflow: 'hidden',

        img: {
            maxWidth: '100%',
        }
    },

    select: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#39393A',
        position: 'relative',
        minWidth: '180px',
        margin: '0 auto',
        padding:' 12px 15px',
        background: 'transparent',
        outline: 'none',
        border: 'none',
        appearance: 'none',
        cursor: 'pointer',
        transition: 'all .3s ease-out',
    },

    logout: {
        overflow: 'hidden',
        width: '35px',
        height: '35px',
        borderRadius: '100%',
        display: 'inline-block',
        border: 'none',
        outline: 'none',
        color: 'transparent',
        backgroundImage: 'url(https://refactor-apollo-queries.financeiro.labcod.es/static/media/logout-icon.754628c1.svg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
    }
};

export default styles;