const calculateDuration = (timeRange: string): string => {
    const [startTime, endTime] = timeRange.split(" ~ ").map(time => {
        const [hour, minute] = time.split(":").map(Number);
        return hour * 60 + minute; // 분 단위로 변환
    });

    const duration = endTime - startTime;
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (minutes === 0) {
        return `${hours}시간`;
    } else {
        return `${hours}시간 ${minutes}분`;
    }
};

export default calculateDuration;