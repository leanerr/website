import React,{Component} from 'react';
import {Row , Col} from 'react-grid-system';
import '../css/flexboxgrid.css';

export default class Pro extends Component {
    render(){
        return(

                <div className="comment-section" id="What people say">
                    <div className="comment-section col-s-hidden">
                        <div className="comment-section__head ">
                            <div className="content">
                                <h3 className="white ">سفر سلامت شما از اینجا شروع میشود</h3>
                                <hr/>
                                <p className="white">برای هرکسی که به دنبال یه تغییر شیوه زندگی واقعی است اما به کمک کمی در طول
                                    راه نیاز دارد ,این برنامه یک گزینه عالی است</p>
                                {/*<p className="white">مشاهده همه نقدها</p>*/}
                            </div>
                        </div>
                        <div className="comment-section__content col-s-hidden">
                            <div className="comment-box">
                                <h2 className="comment-box__title">تغذیه </h2>
                                <hr/>
                                    <p className="comment-box__description"> تغذیه بدن با غذا است در فیتکس ما معتقدیم که بهترین برنامه تغذیه شامل
                                        غذاهای سالم و همه غذاهایی است که در قبل از گرسنگی تغذیه میکنید. بدن به مواد
                                        غذایی نیاز دارد تا به درستی عمل کند تا از بیماری جلوگیری کند و عملکرد جسمانی
                                        را بهبود ببخشد </p>
                            </div>
                            <div className="comment-box col-s-hidden">
                                <h2 className="comment-box__title">تناسب اندام</h2>
                                <hr/>
                                    <p className="comment-box__description">تناسب اندام اغلب به عنوان مهمترین جنبه ی یک برنامه سالم تندرستی
                                        شناخته میشود . حقیقت این است که هر بدن متفاوت است و هیچ راه درست یا غلطی
                                        برای حرکت وجود ندارد.تمرینات fitex آسان و برای تمرین در خانه است </p>
                            </div>
                            <div className="comment-box col-s-hidden">
                                <h2 className="comment-box__title">شیوه ی زندگی سالم</h2>
                                <hr/>
                                    <p className="comment-box__description">با در نظر گرفتن مراحل برای زندگی سالم نه تنها خطر ابتلا به
                                        بیماری های قلبی , سرطان و سایر بیماری ها کاهش میابد بلکه باعث بهبود در سطح
                                        انرژِی , زیبایی پوست ,کاهش استرس نیز میشود. دستورالعمل آسان برای هر وعده
                                        غذایی و یادآوری روزانه برای نوشیدن آب بیشتر و حرکت به سمت اهداف خود.</p>
                            </div>
                            <div className="comment-box col-s-hidden">
                                <h2 className="comment-box__title">رژیم غذایی مناسب</h2>
                                <hr/>
                                <p className="comment-box__description"> خوردن موادغذایی سالم بخش مهمی از پازل سلامتی است .
                                    خوردن غذای سالم باعث میشود که بدن شما تمام ویتامین ها و مواد غذایی و معدنی
                                    لازم برای تقویت سیستم ایمنی بدن را به دست آورد. دستورات غذایی با توجه به اینکه
                                    شما در حال افزایش یا کاهش وزن و یا عضله سازی هستید تنظیم شده اند.</p>
                        </div>
                    </div>
                    </div>  </div>


        )
    }
}
