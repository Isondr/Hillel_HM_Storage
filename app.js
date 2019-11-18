$('#msg_btn').click(function(){
    $('#modal_window').modal('show');
});

$('#closeModWin').click(function(){
    $('#modal_window').modal('hide');
});

$('#saveModWin').click(function(){
    $('#modal_window').modal('hide');
})

$('#msg_btn').tooltip(
    {
        title: 'Random text',
        placement: 'bottom',
    }
)

$('#alertBtn').click(function(){
    $('#alertBlock').toggleClass('hidden');
})

moment.locale('ru');
$('#birthdayDate').text(moment('02.01.1990', 'DD.MM.YYYY').format('Do MMM YYYY, dddd'));

$('#changeFormat').click(function(){
    let userDate = $('#userDate').val();
    console.log(userDate)
    let formatedDate = moment(userDate, 'YYYY-MM-DD').format('Do MMM YYYY, dddd');
    $('#changedDate').text(formatedDate);
});