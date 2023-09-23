import { Chat, ChatWindow, Launcher, SessionStatus, SystemResponse, TurnType, UserResponse, useRuntime } from '@voiceflow/react-chat';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { match } from 'ts-pattern';

const IMAGE = 'https://picsum.photos/seed/1/200/300';
const AVATAR = 'https://picsum.photos/seed/1/80/80';

export const MyChat  = () => {
  const [open, setOpen] = useState(false);
  const {userInfo} = useSelector((state)=>state.auth)
  const runtime = useRuntime({
    verify: { authorization: 'VF.DM.6505804c7ba84f0007566a8d.1kL8eoWqPX1OZJ3h' },
    session: { userID: `${userInfo._id}` },
  });
  const handleLaunch = async () => {
    setOpen(true);
    await runtime.launch();
  };

  const handleEnd = () => {
    runtime.setStatus(SessionStatus.ENDED);
    setOpen(false);
  };

  if (!open) {
    return (
      <span
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '4rem',
        }}
      >
        <Launcher onClick={handleLaunch} />
      </span>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        right: '1rem',
        top: '3.5rem',
        bottom: '3rem',
        width: '400px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <ChatWindow.Container>
        <Chat
          title="PrashnaAI"
          description="Your Voice Matters"
          image={IMAGE}
          avatar={AVATAR}
          startTime={runtime.session.startTime}
          hasEnded={runtime.isStatus(SessionStatus.ENDED)}
          isLoading={!runtime.session.turns.length}
          onStart={runtime.launch}
          onEnd={handleEnd}
          onSend={runtime.reply}
          onMinimize={handleEnd}
        >
          {runtime.session.turns.map((turn, turnIndex) =>
            match(turn)
              .with({ type: TurnType.USER }, ({ id, type: _, ...props }) => <UserResponse {...props} key={id} />)
              .with({ type: TurnType.SYSTEM }, ({ id, type: _, ...props }) => (
                <SystemResponse key={id} {...props} avatar={AVATAR} isLast={turnIndex === runtime.session.turns.length - 1} />
              ))
              .exhaustive()
          )}
          {runtime.indicator && <SystemResponse.Indicator avatar={AVATAR} />}
        </Chat>
      </ChatWindow.Container>
    </div>
  );
};