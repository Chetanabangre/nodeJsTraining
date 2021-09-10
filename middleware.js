app.use((req, res, next) => {
    console.log('root middleware');
    next();
});

app.use('/category', (req, res, next) => {
    console.log('category from middleware');
    next();
});
