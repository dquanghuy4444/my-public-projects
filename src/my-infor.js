import { v4 as uuidv4 } from 'uuid';

export const projects = [
    {
        id: uuidv4(),
        name: "daudit",
        state: 0, // 0 : handmake , 1 : clone
        wasCompleted: true,
        wasPublish: true,
        time: "16h",
        tech: "Reactjs(tailwindcss) + Firebase (firestore + cloud)",
        techid: [1],
        description: "App chơi game đầu đít",
        isFavorited: true,
        imgBg: "10.jpg",
        imgTech: ["reactjs.png"],
        linkPublicWeb: "https://daudit.vercel.app/",
        linkSourceCode: "",
    },
    {
        id: uuidv4(),
        name: "ludee (landing page)",
        state: 0, // 0 : handmake , 1 : clone
        wasCompleted: true,
        wasPublish: true,
        time: "12h",
        tech: "Reactjs(tailwindcss) + Lottie + i18n + netlify + namecheap",
        techid: [1],
        description: "Landing Page quảng bá app Ludee",
        isFavorited: true,
        imgBg: "10.jpg",
        imgTech: ["reactjs.png"],
        linkPublicWeb: "https://ludee.io",
        linkSourceCode: "",
    },
    {
        id: uuidv4(),
        name: "Custom Your Face",
        state: 0, // 0 : handmake , 1 : clone
        wasCompleted: false,
        wasPublish: true,
        time: "",
        tech: "NextJS(tailwindcss + fabricjs) + Strapi + S3",
        techid: [1],
        description: "Bán quần áo mang tính cá nhân ",
        isFavorited: true,
        imgBg: "11.jpg",
        imgTech: ["reactjs.png"],
        linkPublicWeb: "https://curf.vercel.app/",
        linkSourceCode: "",
    },
    {
        id: uuidv4(),
        name: "xes-tahc",
        state: 0, // 0 : handmake , 1 : clone
        wasCompleted: false,
        wasPublish: false,
        time: "",
        tech: "NestJS + Mongodb + Websocket + ReactJS + TailwindCSS + MaterialUI",
        techid: [2],
        description: "Chatroom giống như messengers",
        isFavorited: true,
        imgBg: "1.jpg",
        imgTech: ["nodejs.png"],
        linkPublicWeb: "",
        linkSourceCode: "https://github.com/dquanghuy4444/xes-tahc",
    },
    {
        id: uuidv4(),
        name: "PSD Parse",
        state: 0, // 0 : handmake , 1 : clone
        wasCompleted: true,
        wasPublish: true,
        time: "8h",
        tech: "ReactJS + PSDjs + FabricJS",
        techid: [1],
        description: "Parse PSD sang hình ảnh",
        isFavorited: true,
        imgBg: "10.jpg",
        imgTech: ["reactjs.png"],
        linkPublicWeb: "https://pohip-psd-parser.netlify.app/",
        linkSourceCode: "https://github.com/dquanghuy4444/psd-parser",
    },
    {
        id: uuidv4(),
        name: "Wishy Wishy",
        state: 0, // 0 : handmake , 1 : clone
        wasCompleted: true,
        wasPublish: true,
        time: "25h",
        tech: "ReactJS + MockAPI",
        techid: [1],
        description: "Đây là trang web để chưa đựng điều ước của người dùng",
        isFavorited: true,
        imgBg: "2.jpg",
        imgTech: ["reactjs.png", "api.png"],
        linkPublicWeb: "https://wishywishy.netlify.app/",
        linkSourceCode: "https://github.com/dquanghuy4444/wishywishy",
    },
    {
        id: uuidv4(),
        name: "PoShop Mobile",
        state: 0, // 0 : handmake , 1 : clone
        wasCompleted: false,
        wasPublish: true,
        time: "",
        tech: "ReactJS",
        techid: [1],
        description: "Website giao diện bán điện thoại",
        isFavorited: true,
        imgBg: "3.jpg",
        imgTech: ["reactjs.png"],
        linkPublicWeb: "https://poshopz.herokuapp.com/",
        linkSourceCode: "https://github.com/dquanghuy4444/poshop-mobilestore",
    },
    {
        id: uuidv4(),
        name: "Bản đồ gas",
        state: 0, // 0 : handmake , 1 : clone
        wasCompleted: false,
        wasPublish: false,
        time: "",
        tech: "Asp.net MVC + Asp.net Webservice + Leaflet",
        techid: [0],
        description: "Đây là trang web để hiển thị cửa hàng gas , yêu cầu gọi gas của khách hàng",
        isFavorited: true,
        imgBg: "4.jpg",
        imgTech: ["dotnet.png"],
        linkPublicWeb: "",
        linkSourceCode: "https://github.com/dquanghuy4444/gas-map",
    },
    {
        id: uuidv4(),
        name: "WebRTC",
        state: 1, // 0 : handmake , 1 : clone
        wasCompleted: true,
        wasPublish: false,
        time: "1h30",
        tech: "NodeJS + SocketIO + Express + ejs + PeerJS",
        techid: [2],
        description: "Trang web để video call với mọi người",
        isFavorited: false,
        imgBg: "6.jpg",
        imgTech: ["nodejs.png", "socketio.png"],
        linkPublicWeb: "",
        linkSourceCode: "https://github.com/dquanghuy4444/webrtc-stream",
    },
    {
        id: uuidv4(),
        name: "Posts",
        state: 1, // 0 : handmake , 1 : clone
        wasCompleted: true,
        wasPublish: true,
        time: "1h",
        tech: "NodeJS + Express + MongoDB + Handlebars",
        techid: [2],
        description: "CRUD Post",
        isFavorited: false,
        imgBg: "7.jpg",
        imgTech: ["nodejs.png", "mongodb.png"],
        linkPublicWeb: "https://pohipposts.herokuapp.com/",
        linkSourceCode: "https://github.com/dquanghuy4444/posts",
    },
    {
        id: uuidv4(),
        name: "Quiz App",
        state: 1, // 0 : handmake , 1 : clone
        wasCompleted: true,
        wasPublish: true,
        time: "1h30",
        tech: "ReactJS(Typescript)",
        techid: [1],
        description: "App để trả lời câu hỏi",
        isFavorited: false,
        imgBg: "8.jpg",
        imgTech: ["reactjs.png"],
        linkPublicWeb: "https://pohip-quizapp.netlify.app/",
        linkSourceCode: "https://github.com/dquanghuy4444/quiz-app",
    },
    {
        id: uuidv4(),
        name: "React Components",
        state: 1, // 0 : handmake , 1 : clone
        wasCompleted: false,
        wasPublish: true,
        time: "",
        tech: "ReactJS ",
        techid: [1],
        description: "Những component quan trọng , hay sử dụng",
        isFavorited: true,
        imgBg: "11.jpg",
        imgTech: ["reactjs.png"],
        linkPublicWeb: "https://pohip-components.netlify.app/",
        linkSourceCode: "https://github.com/dquanghuy4444/my-react-components",
    },
        {
        id: uuidv4(),
        name: "Library Pohip-common",
        state: 1, // 0 : handmake , 1 : clone
        wasCompleted: false,
        wasPublish: true,
        time: "",
        tech: "Typescript ",
        techid: [1],
        description: "Library chứa các hàm common",
        isFavorited: true,
        imgBg: "11.jpg",
        imgTech: ["nodejs.png"],
        linkPublicWeb: "https://www.npmjs.com/package/pohip-common",
        linkSourceCode: "https://github.com/dquanghuy4444/pohip-common",
    },
    {
        id: uuidv4(),
        name: "Covid-19 Tracker",
        state: 1, // 0 : handmake , 1 : clone
        wasCompleted: true,
        wasPublish: true,
        time: "2h",
        tech: "ReactJS ",
        techid: [1],
        description: "Ứng dụng để tra cứu thông tin dịch covid 19 của từng nước và thế giới",
        isFavorited: false,
        imgBg: "1.jpg",
        imgTech: ["reactjs.png"],
        linkPublicWeb: "https://pohip-covid19-tracker.netlify.app/",
        linkSourceCode: "https://github.com/dquanghuy4444/covid19-tracker",
    },
]


export const infor ={
    githubLink: "https://github.com/dquanghuy4444",
    githubName: "dquanghuy4444",
    fbLink: "https://www.facebook.com/dqhuy4444",
    fbName: "dqhuy4444",
    mail: "wepiohip@gmail.com",
    skype: "wepiohip",
    phone: "0963181679",
    address: "Cổ Nhuế , Bắc Từ Liêm , Hà Nội",
}
