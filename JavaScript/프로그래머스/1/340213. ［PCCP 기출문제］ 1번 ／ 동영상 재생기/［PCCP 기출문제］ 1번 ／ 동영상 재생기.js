function solution(video_len, pos, op_start, op_end, commands) {
    
    function formatTime(time) {
        
        let [min, sec] = time.split(':')
        return Number(min)*60 + Number(sec)
    }
    
    [video_len, pos, op_start, op_end] = [formatTime(video_len), formatTime(pos), formatTime(op_start), formatTime(op_end)]
    
    for (const command of commands) {
        if (pos>=op_start && pos<op_end) pos = op_end
        
        if (command==="next") {
            if (video_len - pos < 10) pos = video_len
            else pos += 10
        } else {
            if (pos < 10) pos = 0
            else pos -= 10
        }
        console.log(pos)
    }
    
    if (pos>=op_start && pos<op_end) pos = op_end
    
    let min = String(Math.floor(pos/60))
    let sec = String(pos%60)
    if (min.length===1) min = '0' + min
    if (sec.length===1) sec = '0' + sec
    return min+":"+sec
    
}