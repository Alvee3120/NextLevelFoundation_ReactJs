import Card from './components/Card'

let users = [
  {
    name: 'Md Fazlah Karim Alvee',
    age: 25,
    address: 'Uttara, Azompur, 1230',
    phone: '8801642874989',
    company: 'Shordindu',
  },
  {
    name: 'Mahia Rahman',
    age: 24,
    address: 'Mirpur, Dhaka, 1216',
    phone: '8801712345678',
    company: 'TechNova',
  },
  {
    name: 'Hridoy Ahmed',
    age: 26,
    address: 'Dhanmondi, Dhaka, 1209',
    phone: '8801812345679',
    company: 'ByteCraft',
  },
  {
    name: 'Sakib Hasan',
    age: 27,
    address: 'Banani, Dhaka, 1213',
    phone: '8801912345680',
    company: 'CodeLab',
  },
  {
    name: 'Nusrat Jahan',
    age: 23,
    address: 'Mohammadpur, Dhaka, 1207',
    phone: '8801612345681',
    company: 'PixelWorks',
  },
  {
    name: 'Tanvir Hossain',
    age: 28,
    address: 'Uttara, Sector 7, 1230',
    phone: '8801512345682',
    company: 'WebMatrix',
  },
  {
    name: 'Sumaiya Akter',
    age: 22,
    address: 'Bashundhara, Dhaka, 1229',
    phone: '8801712345683',
    company: 'SoftEdge',
  },
  {
    name: 'Rakibul Islam',
    age: 29,
    address: 'Khilgaon, Dhaka, 1219',
    phone: '8801812345684',
    company: 'DevPoint',
  },
  {
    name: 'Fahim Rahman',
    age: 25,
    address: 'Farmgate, Dhaka, 1215',
    phone: '8801912345685',
    company: 'CloudTech',
  },
  {
    name: 'Sadia Sultana',
    age: 24,
    address: 'Gulshan, Dhaka, 1212',
    phone: '8801612345686',
    company: 'DesignHub',
  },
  {
    name: 'Arif Hossain',
    age: 30,
    address: 'Tejgaon, Dhaka, 1208',
    phone: '8801512345687',
    company: 'NextGen',
  },
  {
    name: 'Tanjila Ahmed',
    age: 21,
    address: 'Rampura, Dhaka, 1219',
    phone: '8801712345688',
    company: 'CreativeIT',
  },
  {
    name: 'Shakil Khan',
    age: 26,
    address: 'Badda, Dhaka, 1212',
    phone: '8801812345689',
    company: 'TechVision',
  },
  {
    name: 'Mim Akter',
    age: 23,
    address: 'Kakrail, Dhaka, 1000',
    phone: '8801912345690',
    company: 'AppWorks',
  },
  {
    name: 'Imran Kabir',
    age: 31,
    address: 'Motijheel, Dhaka, 1000',
    phone: '8801612345691',
    company: 'DigitalWave',
  },
  {
    name: 'Raisa Islam',
    age: 22,
    address: 'Wari, Dhaka, 1203',
    phone: '8801512345692',
    company: 'BrightSoft',
  },
  {
    name: 'Nayeem Hasan',
    age: 27,
    address: 'Lalmatia, Dhaka, 1207',
    phone: '8801712345693',
    company: 'CodeSphere',
  },
  {
    name: 'Jannatul Ferdous',
    age: 25,
    address: 'Kallyanpur, Dhaka, 1216',
    phone: '8801812345694',
    company: 'TechBridge',
  },
  {
    name: 'Rifat Chowdhury',
    age: 28,
    address: 'Pallabi, Dhaka, 1216',
    phone: '8801912345695',
    company: 'InnovateBD',
  },
  {
    name: 'Anika Rahman',
    age: 24,
    address: 'Uttara, Sector 10, 1230',
    phone: '8801612345696',
    company: 'FutureTech',
  },
]

function App() {
  return (
    <>
      {users
        .filter((user) => user.age > 25)
        .sort((a, b) => b.age - a.age)
        .map((user) => (
          <Card
            name={user.name}
            age={user.age}
            address={user.address}
            phone={user.phone}
            company={user.company}
          />
        ))}
    </>
  )
}

export default App
