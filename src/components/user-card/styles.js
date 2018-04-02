const styles = {
    cardWrapper: {
        borderRadius: '5px',
        width: '220px',
        height: '200px',
        overflow: 'hidden',
        opacity: '1',
        border: '1px solid #CCCCCC',
        cursor: 'pointer',
    },

    cardImage: {
        height: '68%',
        overflow: 'hidden',
        backgroundColor: '#DEDEDE',
        margin: '0',

        img: {
            height: 'auto',
            maxWidth: '100%',
        }
    },

    userInfo: {
        height: '32%',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 6px',
    },

    box: {
        info: {
            flex: '1',
            fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
            flex: '1 1 60%',
            fontSize: '12px',
        },

        title: {
            fontSize: '1.4em',
            margin: '5px 0'
        },

        subtitle: {
            fontWeight: '300',
            margin: '0'
        },

        status: {
            flex: '1',
            fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
            flex: '1 1 40%',
            textAlign: 'right',
            borderRadius: '3px',
            color: '#FFF',
            padding: '3px 10px',
            textTransform: 'capitalize',

            type: {
                pending: {
                    backgroundColor: 'red',
                    padding: '3px 10px',
                    borderRadius: '5px',
                },

                success: {
                    backgroundColor: 'green',
                    padding: '3px 10px',
                    borderRadius: '5px',
                },
            },
        }
    }
};

export default styles;