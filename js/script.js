mario = document.querySelector('.mario')

pipe = document.querySelector('.pipe')

textStart = document.querySelector('text-start')

audioStart = new Audio('./imagens/audio_theme.mp3')

audioGameOver = new Audio('./imagens/audio_gameover.mp3')

const start =()=>{

    document.getElementById('text-start').style.color ='rgb(236, 236, 236)'
    
    pipe.classList.add('pipe-animation')

    /*mario.src ='./imagens/mario.gif'
    mario.style.width= '150px'
    mario.style.marginLeft ='50px'*/

    audioStart.play()

}
document.addEventListener('keydown',start)

const jump = ()=>{
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 1500)
}
document.addEventListener('keydown', jump)


/*acabar com o jogo*/

const checkGameOver = setInterval(()=>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(pipePosition <=120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './imagens/mario1.jpg'
        mario.style.width= '75px'
        mario.style.marginLeft ='50px'

        document.getElementById('text-start').style.color='black'
        document.getElementById('text-start').innerHTML='<strong>GAME OVER</strong>'

        function stopAudioStart(){
            audioStart.pause()
        }stopAudioStart()

        audioGameOver.play()

        function stopAudio(){
            audioGameOver.pause()
        }setTimeout(stopAudio,8000)

        clearInterval(checkGameOver)
    }

},10)

/*const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft
   
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('p', '')

    if(pipePosition <=120 && pipePosition > 0 && marioPosition < 80
    ){
        pipe.style.animation = 'none'
        pipe.style.left =`${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom =`${marioPosition}px `

        mario.src = './imagens/mario1.jpg'
        mario.style.width = '75px'
        mario.style.marginLeft ='50px'

        document.getElementById('text-start').style.color= 'black'
        document.getElementById('text-start').innerHTML='<strong>GAME OVER</strong>'



        function stopAudioStart(){
            audioStart.pause()
        }stopAudioStart()

        audioGameOver.play()

        function stopAudio(){
            audioGameOver.pause()
        }setTimeout(stopAudio, 8000)

        clearInterval(loop)

    }

}, 10)

document.addEventListener('keydown', jump)*/