interface Props {
  videoID: string;
}

function Video({ videoID }: Props) {
  return (
    <div className='p-6'>
      <iframe
        className='rounded-md'
        width='100%'
        height='500'
        src={`https://www.youtube.com/embed/${videoID}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
}

export default Video;
