import { ActionButtonsRow, Content, DraggableTopBar, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <>
    <DraggableTopBar/>
    <RootLayout>
      <Sidebar className=' bg-zinc-700'>
        <ActionButtonsRow className='flex justify-between mt-1' />
      </Sidebar>
      <Content className="border-l bg-zinc-800 border-l-white/30">Content</Content>
    </RootLayout>
    </>
  )
}

export default App
