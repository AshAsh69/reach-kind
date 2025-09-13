import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageCircle, Phone, Video, MoreVertical } from 'lucide-react';
import Navigation from '@/components/Navigation';

interface Message {
  id: number;
  sender: 'user' | 'helper';
  message: string;
  timestamp: string;
  senderName: string;
}

const QuickChatPage = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');
  
  const chatsList = [
    {
      id: 1,
      helperName: 'Sarah M.',
      lastMessage: 'I can help you with the grocery shopping tomorrow morning!',
      timestamp: '2 min ago',
      unread: 2,
      status: 'online',
      helpType: 'Grocery Shopping'
    },
    {
      id: 2,
      helperName: 'Mike R.',
      lastMessage: 'What time works best for the computer setup?',
      timestamp: '15 min ago',
      unread: 0,
      status: 'offline',
      helpType: 'Tech Support'
    },
    {
      id: 3,
      helperName: 'Lisa K.',
      lastMessage: 'On my way! Should be there in 10 minutes.',
      timestamp: '1 hour ago',
      unread: 1,
      status: 'online',
      helpType: 'Transportation'
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: 'helper',
      message: 'Hi! I saw your request for grocery shopping help. I\'d be happy to assist you!',
      timestamp: '10:30 AM',
      senderName: 'Sarah M.'
    },
    {
      id: 2,
      sender: 'user',
      message: 'That would be wonderful! I mainly need help carrying heavy items and reaching high shelves.',
      timestamp: '10:32 AM',
      senderName: 'You'
    },
    {
      id: 3,
      sender: 'helper',
      message: 'No problem at all! What time would work best for you? I\'m available tomorrow morning.',
      timestamp: '10:35 AM',
      senderName: 'Sarah M.'
    },
    {
      id: 4,
      sender: 'user',
      message: 'Tomorrow morning around 9 AM would be perfect. Should we meet at the store entrance?',
      timestamp: '10:37 AM',
      senderName: 'You'
    },
    {
      id: 5,
      sender: 'helper',
      message: 'I can help you with the grocery shopping tomorrow morning!',
      timestamp: '10:40 AM',
      senderName: 'Sarah M.'
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const selectedChatData = chatsList.find(chat => chat.id === selectedChat);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient-hero mb-4">Quick Chat</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect instantly with helpers and coordinate your assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Chat List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Active Chats
              </CardTitle>
              <CardDescription>
                Your ongoing conversations with helpers
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[480px]">
                <div className="space-y-2 p-4">
                  {chatsList.map(chat => (
                    <div
                      key={chat.id}
                      className={`p-4 rounded-lg cursor-pointer transition-smooth hover:bg-muted/50 ${
                        selectedChat === chat.id ? 'bg-primary/10 border border-primary/20' : ''
                      }`}
                      onClick={() => setSelectedChat(chat.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${
                            chat.status === 'online' ? 'bg-success' : 'bg-muted-foreground'
                          }`} />
                          <h4 className="font-semibold">{chat.helperName}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          {chat.unread > 0 && (
                            <Badge variant="destructive" className="text-xs">
                              {chat.unread}
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs mb-2">
                        {chat.helpType}
                      </Badge>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {chat.lastMessage}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Messages */}
          <Card className="lg:col-span-2">
            {selectedChatData ? (
              <>
                <CardHeader className="border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          selectedChatData.status === 'online' ? 'bg-success' : 'bg-muted-foreground'
                        }`} />
                        {selectedChatData.helperName}
                      </CardTitle>
                      <CardDescription>{selectedChatData.helpType}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <ScrollArea className="h-[400px] p-4">
                    <div className="space-y-4">
                      {messages.map(message => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                              message.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'user' 
                                ? 'text-primary-foreground/70' 
                                : 'text-muted-foreground'
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  
                  {/* Message Input */}
                  <div className="border-t p-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} size="sm" variant="hero">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="h-full flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Select a chat to start messaging</h3>
                  <p className="text-muted-foreground">
                    Choose a conversation from the list to continue chatting with your helper
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default QuickChatPage;