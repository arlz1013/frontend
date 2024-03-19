function Clas () {
    var enviar = ""
    for( var _i = 1; _i <= 31; _i += 1 ){
        var _addClass = '';
        if( _i === 12 ){ _addClass = ' class="selected"'; }
        
        switch( _i ){
            case 8:
            case 10:
            case 27:
                _addClass = ' class="event"';
            break;
        }

        enviar+='<li><a href="#" title="'+_i+'" data-value="'+_i+'"'+_addClass+'>'+_i+'</a></li>';
    }
    return <enviar/>
}

const Calendar = () => {
    return (
<div className="Calendar">

    <div className="calendar">

    <div className="col leftCol">
        <div className="content">
            <h1 className="date">Friday<span>September 12th</span></h1>
            <div className="notes">
                <p>
                    <input type="text" value="" placeholder="new note"/>
                    <a href="#" title="Add note" className="addNote animate">+</a>
                </p>
                <ul className="noteList">
                    <li>Headbutt a lion<a href="#" title="Remove note" className="removeNote animate">x</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="col rightCol">
        <div className="content">
            <h2 class="year">2013</h2>
            <ul class="months">
                <li><a href="#" title="Jan" data-value="1">Jan</a></li>
                <li><a href="#" title="Feb" data-value="2">Feb</a></li>
                <li><a href="#" title="Mar" data-value="3">Mar</a></li>
                <li><a href="#" title="Apr" data-value="4">Apr</a></li>
                <li><a href="#" title="May" data-value="5">May</a></li>
                <li><a href="#" title="Jun" data-value="6">Jun</a></li>
                <li><a href="#" title="Jul" data-value="7">Jul</a></li>
                <li><a href="#" title="Aug" data-value="8">Aug</a></li>
                <li><a href="#" title="Sep" data-value="9" class="selected">Sep</a></li>
                <li><a href="#" title="Oct" data-value="10">Oct</a></li>
                <li><a href="#" title="Nov" data-value="11">Nov</a></li>
                <li><a href="#" title="Dec" data-value="12">Dec</a></li>
            </ul>
            <div className="clearfix"></div>
            <ul className="weekday">
                <li><a href="#" title="Mon" data-value="1">Mon</a></li>
                <li><a href="#" title="Tue" data-value="2">Tue</a></li>
                <li><a href="#" title="Wed" data-value="3">Wed</a></li>
                <li><a href="#" title="Thu" data-value="4">Thu</a></li>
                <li><a href="#" title="Fri" data-value="5">Fri</a></li>
                <li><a href="#" title="Say" data-value="6">Sat</a></li>
                <li><a href="#" title="Sun" data-value="7">Sun</a></li>
            </ul>
            <div className="clearfix"></div>
            <ul>
                <Clas></Clas>
            </ul>
            <div class="clearfix"></div>
        </div>
    </div>

    <div class="clearfix"></div>

    </div>
</div>
    )
}

export default Calendar;