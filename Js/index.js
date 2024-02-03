$('.nav-openButton').click(function () {
    $('.navSideBar').css('width', 250)
    $('.links').css('opacity', 100)
    $('.fa-xmark').css('opacity', 100)
})
function closeNav (){
    $('.navSideBar').css('width', 0)
    $('.links').css('opacity', 0)
    $('.fa-xmark').css('opacity', 0)
}
$('.fa-xmark').click(closeNav)
// details-section
$('.Details').click(function () {
    $(this).next().slideToggle(500)
})
// duration-section
//------> the event date to countDown
//------> 1 Second = 1000 ms
let eventDate = new Date('May 30 2024 17:00:00').getTime()
//console.log(eventDate);
let counter = setInterval(() => {
    //get date now
    let dateNow = new Date().getTime()
    let differentDuration = eventDate - dateNow
    //days diff
    let days = Math.floor(differentDuration / (1000 * 60 * 60 * 24))
    $('.days span').html(days + ' ' + 'D')
    //hours diff
    let hours = Math.floor(differentDuration % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    $('.hours span').html(hours + ' ' + 'h')
    //minutes diff
    let minutes = Math.floor(differentDuration % (1000 * 60 * 60) / (1000 * 60))
    $('.minutes span').html(minutes + ' ' + 'm')
    //seconds diff
    let seconds = Math.floor(differentDuration % (1000 * 60) / 1000)
    $('.seconds span').html(seconds + ' ' + 's')
})
// contact-section
$('#user-message').keyup(function () {
    let value = $('#user-message').val()
    let valueLength = value.length
    let calcLetters = 100 - valueLength
    $('.lettersNum span').html(calcLetters)
})
// scroll
$('.links ul li a').click(function () {
    closeNav ()
    let sectionClicked = $(this).attr('href')
    let sectionTop = $(sectionClicked).offset().top
    $('html , body').animate({ scrollTop: sectionTop }, 1000)

})
