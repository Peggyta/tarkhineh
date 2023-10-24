const product = {
    products: [
        {
            slug: 'apple',
            title: 'آب سیب',
            ingredient: 'سیب تازه',
            rating: 4.5,
            price: 50000,
            discount: 0,
            image: '/images/apple.jpg' ,
            category: 'نوشیدنی',
            recipe: ''
        },
        {
            slug: 'baqaliqatoq',
            title: 'باقلاقاتوق',
            ingredient: 'باقلا، شوید خشک، کره، سیر، تخم‌مرغ',
            rating: 4,
            price: 205000,
            discount: 20,
            image: '/images/baqaliqatoq.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای ایرانی'
        },
        {
            slug: 'coffee',
            title: 'قهوه',
            ingredient: '',
            rating: 4.7,
            price: 70000,
            discount: 0,
            image: '/images/coffee.jpg',
            category: 'نوشیدنی',
            recipe: ''
        },
        {
            slug: 'coffee-milk',
            title: 'شیرقهوه',
            ingredient: 'شیر، قهوه',
            rating: 4.2,
            price: 85000,
            discount: 0,
            image: '/images/coffee-milk.jpg' ,
            category: 'نوشیدنی',
            recipe: ''
            
        },
        {
            slug: 'cotlet',
            title: 'کتلت گوشت',
            ingredient: 'گوشت، پیاز، سیب‌زمینی، نمک، فلفل',
            rating: 4,
            price: 120000,
            discount: 0,
            image: '/images/cotlet.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای ایرانی'
            
        }, 
        {
            slug: 'dolemeh-kalam',
            title: 'دلمه برگ کلم',
            ingredient: 'کلم‌برگ، برنج، لپه پخته، سبزی معطر، رب',
            rating: 5,
            price: 220000,
            discount: 8,
            image: '/images/dolemeh-kalam.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای ایرانی'
            
        },
        {
            slug: 'eggplant',
            title: 'پیتزا بادمجان و زیتون',
            ingredient: 'بادمجان، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی',
            rating: 4,
            price: 150000,
            discount: 0,
            image: '/images/eggplant.jpg' ,
            category: 'غذای اصلی',
            recipe: 'پیتزاها'
            
        },
        {
            slug: 'esfenaj',
            title: 'پنینی اسفناج',
            ingredient: 'قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه، سس مایونز',
            rating: 3,
            price: 210000 ,
            discount: 15,
            image: '/images/esfenaj.jpg' ,
            category: 'غذای اصلی',
            recipe: 'ساندویچ‌ها'
            
        },
        {
            slug: 'falafel',
            title: 'فلافل',
            ingredient: 'نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب‌زمینی',
            rating: 3,
            price: 80000,
            discount: 0,
            image: '/images/falafel.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای ایرانی'
            
        },
        {
            slug: 'jelly-bastani',
            title: 'ژله بستنی',
            ingredient: 'ژله توت فرنگی، بستنی وانیلی، شیر، توت فرنگی',
            rating: 3.5,
            price: 70000,
            discount: 0,
            image: '/images/jelly-bastani.jpg' ,
            category: 'دسر',
            recipe: ''
            
        },
        {
            slug: 'jelly-berry',
            title: 'ژله توت فرنگی',
            ingredient: 'ژله توت فرنگی، توت فرنگی، شیر، ژلاتین',
            rating: 4,
            price: 80000,
            discount: 0,
            image: '/images/jelly-berry.jpg' ,
            category: 'دسر',
            recipe: ''
            
        },
        {
            slug: 'jelly-chia',
            title: 'ژله تخم‌شربتی',
            ingredient: 'ژله بلوبری، تخم‌شربتی',
            rating: 4,
            price: 70000,
            discount: 5,
            image: '/images/jelly-chia.jpg' ,
            category: 'دسر',
            recipe: ''
            
        },
        {
            slug: 'jelly-fruit',
            title: 'ژله میوه‌ای',
            ingredient: 'ژلاتین، پرتقال، کیوی، توت فرنگی',
            rating: 5,
            price: 100000,
            discount: 0,
            image: '/images/jelly-fruit.jpg' ,
            category: 'دسر',
            recipe: ''
            
        },
        {
            slug: 'kalejoush',
            title: 'کله‌جوش',
            ingredient: 'کشک، گردو، پیاز، نعناع خشک',
            rating: 4,
            price: 210000,
            discount: 5,
            image: '/images/kalejoush.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای ایرانی'
            
        },
        {
            slug: 'kalzuneh',
            title: 'کالزونه اسفناج',
            ingredient: 'اسفناج، قارپ، پنیر پیتزا یا موزارلا، پنیر خامه‌ای، پیاز، سیر، روغن زیتون',
            rating: 5,
            price: 190000,
            discount: 17,
            image: '/images/kalzuneh.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای غیر ایرانی'
            
        },
        {
            slug: 'kashk-bademjan',
            title: 'کشک و بادمجان',
            ingredient: 'بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز',
            rating: 5,
            price: 95000,
            discount: 10,
            image: '/images/kashk-bademjan.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای ایرانی'
            
        },
        {
            slug: 'kedoo',
            title: 'ساندویچ کتلت کدوسبز',
            ingredient: 'کدوسبز، سیب‌زمینی، پیاز، هویج',
            rating: 5,
            price: 145000,
            discount: 0,
            image: '/images/kedoo.jpg' ,
            category: 'غذای اصلی',
            recipe: 'ساندویچ‌ها'
            
        },
        {
            slug: 'koofteh',
            title: 'کوفته برنجی',
            ingredient: 'برنج، سبزی کوفته، آرد نخودچی، گردو، زرشک',
            rating: 5,
            price: 180000,
            discount: 25,
            image: '/images/koofteh.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای ایرانی'
            
        },
        {
            slug: 'kukusabzi',
            title: 'کوکو سبزی',
            ingredient: 'تخم مرغ، گردو، سیر، آرد، سبزی کوکویی',
            rating: 5,
            price: 300000,
            discount: 10,
            image: '/images/kukusabzi.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای ایرانی'
            
        },
        {
            slug: 'lazania',
            title: 'لازانیا',
            ingredient: 'لازانیا، قارچ، ریحان تازه، جعفری، گوجه فرنگی، پنیر پیتزا، سویا',
            rating: 5,
            price: 150000,
            discount: 0,
            image: '/images/lazania.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای غیر ایرانی'
            
        },
        {
            slug: 'margaritha',
            title: 'پیتزا مارگاریتا',
            ingredient: 'گوجه فرنگی، ریحان، پنیر پیتزا، سیر',
            rating: 2,
            price: 165000,
            discount: 13,
            image: '/images/margaritha.jpg' ,
            category: 'غذای اصلی',
            recipe: 'پیتزاها'
            
        },
        {
            slug: 'masala',
            title: 'چای ماسالا',
            ingredient: 'دارچین، زنجبیل، چای',
            rating: 3.5,
            price: 60000,
            discount: 5,
            image: '/images/masala.jpg' ,
            category: 'نوشیدنی',
            recipe: ''
            
        },
        {
            slug: 'mirzaqasemi',
            title: 'میرزاقاسمی',
            ingredient: 'بادمجان، سیر، رب گوجه، سیر، تخم‌مرغ',
            rating: 5,
            price: 165000,
            discount: 10,
            image: '/images/mirzaqasemi.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای ایرانی'
            
        },
        {
            slug: 'mochi',
            title: 'موچی',
            ingredient: 'نشاسته ذرت، آرد برنج',
            rating: 4.5,
            price: 100000,
            discount: 0,
            image: '/images/mochi.jpg' ,
            category: 'دسر',
            recipe: ''
            
        },
        {
            slug: 'mohito',
            title: 'موهیتو',
            ingredient: 'نعناع، لیموی تازه',
            rating: 3,
            price: 90000,
            discount: 10,
            image: '/images/mohito.jpg' ,
            category: 'نوشیدنی',
            recipe: ''
            
        },
        {
            slug: 'mushroom-soup',
            title: 'سوپ قارچ',
            ingredient: 'قارچ صدفی، شیر، جعفری، نمک',
            rating: 5,
            price: 210000,
            discount: 5,
            image: '/images/mushroom-soup.jpg' ,
            category: 'پیش غذا',
            recipe: ''
            
        },
        {
            slug: 'orange-tea',
            title: 'چای پرتقال',
            ingredient: 'پوست پرتقال، چای سیاه',
            rating: 3,
            price: 50000,
            discount: 0,
            image: '/images/orange-tea.jpg' ,
            category: 'نوشیدنی',
            recipe: ''
            
        },
        {
            slug: 'pakura',
            title: 'پاکورا سبزیجات',
            ingredient: 'گرام ماسالا، پودر کاری، سیر له شده، گشنیز خرد شده',
            rating: 4,
            price: 125000,
            discount: 8,
            image: '/images/pakura.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای غیر ایرانی'
            
        },
        {
            slug: 'pasta-sabzi',
            title: 'پاستا سبزیجات',
            ingredient: 'پاستا، قارچ، گوجه، کدوی خرد شده، پیاز خلالی',
            rating: 5,
            price: 175000,
            discount: 20,
            image: '/images/pasta-sabzi.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای غیر ایرانی'
            
        },
        {
            slug: 'peperoni',
            title: 'پیتزا پپرونی',
            ingredient: 'توفو، فلفل قرمز خشک شده، پودر دانه های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر',
            rating: 4,
            price: 100000,
            discount: 0,
            image: '/images/peperoni.jpg' ,
            category: 'غذای اصلی',
            recipe: 'پیتزاها'
            
        },
        {
            slug: 'ratatui',
            title: 'راتاتویی',
            ingredient: 'بادمجان، گوجه فرنگی، کدوسبز، پیاز، رب گوجه، روغن زیتون، پنیر پارمزان',
            rating: 4,
            price: 180000,
            discount: 45,
            image: '/images/ratatui.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای غیر ایرانی'
            
        },
        {
            slug: 'rokula',
            title: 'پیتزا روکولا',
            ingredient: '',
            rating: 5,
            price: 195000,
            discount: 12,
            image: '/images/rokula.jpg' ,
            category: 'غذای اصلی',
            recipe: 'پیتزاها'
            
        },
        {
            slug: 'rolly-jelly',
            title: 'ژله رولی',
            ingredient: 'ژله میوه‌ای',
            rating: 4,
            price: 65000,
            discount: 0,
            image: '/images/rolly-jelly.jpg' ,
            category: 'دسر',
            recipe: ''
            
        },
        {
            slug: 'soup-morgh',
            title: 'سوپ مرغ',
            ingredient: 'مرغ، رب گوجه، جو پرک، پودر فلفل سیاه',
            rating: 4.5,
            price: 150000,
            discount: 0,
            image: '/images/soup-morgh.jpg' ,
            category: 'پیش غذا',
            recipe: ''
            
        },
        {
            slug: 'soup-noodle',
            title: 'سوپ رشته',
            ingredient: 'رشته آش، نخود، لوبیا، سبزی آش',
            rating: 4,
            price: 130000,
            discount: 10,
            image: '/images/soup-noodle.jpg' ,
            category: 'پیش غذا',
            recipe: ''
            
        },
        {
            slug: 'soup-sir',
            title: 'سوپ سیر',
            ingredient: 'سیر تازه، نمک، پودر فلفل سیاه، شیر',
            rating: 4,
            price: 135000,
            discount: 0,
            image: '/images/soup-sir.jpg' ,
            category: 'پیش غذا',
            recipe: ''
            
        },
        {
            slug: 'susage',
            title: 'ساندویچ سوسیس کوکتل',
            ingredient: 'سوسیس گیاهی، پیاز، سیب‌زمینی، رب گوجه فرنگی',
            rating: 4,
            price: 205000,
            discount: 15,
            image: '/images/susage.jpg' ,
            category: 'غذای اصلی',
            recipe: 'ساندویچ‌ها'
            
        },
        {
            slug: 'sushi',
            title: 'سوشی',
            ingredient: 'جلبک دریایی، برنج کته، سرکه سفید، شکر، نمک دریا',
            rating: 4,
            price: 100000,
            discount: 15,
            image: '/images/sushi.jpg' ,
            category: 'غذای اصلی',
            recipe: 'غذاهای غیر ایرانی'
            
        },   
    ]
}

export default product;