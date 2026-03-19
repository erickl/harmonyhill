import Image from 'next/image';

export default function LeafDivider() {
    const dividerStyle = {
        display: 'flex', 
        justifyContent: 'center', 
        padding: '40px 0',
        backgroundColor: "#E8E0D0",
    };

    const imageStyle = { 
        height: 'auto',
        margin: "0 auto",
        maxHeight: "100px",
        width: "50%",
        display: "block",
    };

    return (
        <div id="leaf-divider" style={dividerStyle}>
            <Image 
                src="/images/leaf-divider.png" 
                alt="leafy divider"
                width={2059}  
                height={413}
                style={imageStyle} 
            />
        </div>
    );
}