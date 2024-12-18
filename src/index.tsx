import { createRoot } from 'react-dom/client'
import { App, Book } from './App'
import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { BookDetail } from './pages/BookDetail'
import { ApiData } from './dataLoaders'

const domNode = document.getElementById('root');
if (domNode != null) {
    const root = createRoot(domNode);
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/About" />
                <Route path="/Contact" />
                <Route
                    path="/book/:id"
                    element={
                        <BookDetail
                            book={{ kind: 'rejected', errorMessage: undefined }}
                            onGoBack={() => console.log('Go back')}
                            onLoaded={(data) => console.log('Data loaded', data)}
                            onRetry={() => console.log('Retry')}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}