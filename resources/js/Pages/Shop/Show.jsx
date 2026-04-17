import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import StandardMenuLayout from '@/Layouts/StandardMenuLayout';

function useCart() {
    const [items, setItems] = useState(() => {
        try { return JSON.parse(sessionStorage.getItem('cart') || '[]'); }
        catch { return []; }
    });

    const save = (next) => {
        setItems(next);
        sessionStorage.setItem('cart', JSON.stringify(next));
    };

    const add = (product) => {
        const existing = items.find(i => i.id === product.id);
        if (existing) {
            save(items.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
        } else {
            save([...items, { ...product, qty: 1 }]);
        }
    };

    const count = items.reduce((sum, i) => sum + i.qty, 0);
    return { add, count };
}

export default function ShowProduct({ product, related = [] }) {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;
    const cart = useCart();

    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        for (let i = 0; i < qty; i++) cart.add(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <>
            <Head title={product.title} />
            <StandardMenuLayout>
                <div className="container py-5">
                    {/* Breadcrumb */}
                    <nav className="mb-4" style={{ fontSize: '0.85rem' }}>
                        <Link href="/shop" style={{ color: 'var(--interwar-gold)' }}>{t('Shop')}</Link>
                        <span className="mx-2 text-muted">/</span>
                        {product.category && (
                            <>
                                <Link href={`/shop?category=${product.category}`}
                                    style={{ color: 'var(--interwar-gold)' }}>
                                    {product.category}
                                </Link>
                                <span className="mx-2 text-muted">/</span>
                            </>
                        )}
                        <span className="text-muted">{product.title}</span>
                    </nav>

                    <Row className="g-5 align-items-start">
                        {/* Image */}
                        <Col md={6}>
                            <div style={{
                                border: '2px solid var(--interwar-gold)',
                                borderRadius: 6,
                                overflow: 'hidden',
                                aspectRatio: '4/3',
                                backgroundColor: '#f5e8d0',
                            }}>
                                {product.image_url ? (
                                    <img src={product.image_url} alt={product.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div className="d-flex align-items-center justify-content-center h-100"
                                        style={{ fontSize: '5rem', color: 'var(--interwar-silver)' }}>
                                    </div>
                                )}
                            </div>
                        </Col>

                        {/* Info */}
                        <Col md={6}>
                            {product.category && (
                                <Badge className="mb-3"
                                    style={{ backgroundColor: 'var(--interwar-gold)', color: 'var(--interwar-ink)' }}>
                                    {product.category}
                                </Badge>
                            )}

                            <h1 style={{ fontFamily: 'var(--font-title)', color: 'var(--interwar-ink)', fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                                {product.title}
                            </h1>

                            <div className="my-4" style={{ fontSize: '1.6rem', fontFamily: 'var(--font-title)', color: 'var(--interwar-ink)' }}>
                                {product.price ? `${Number(product.price).toFixed(2)} RON` : t('Free')}
                            </div>

                            {product.description && (
                                <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                                    {product.description}
                                </p>
                            )}

                            {/* Quantity selector */}
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <span className="small text-muted">{t('Quantity')}:</span>
                                <div className="d-flex align-items-center border rounded"
                                    style={{ borderColor: 'var(--interwar-gold) !important', overflow: 'hidden' }}>
                                    <button className="btn btn-sm px-3"
                                        style={{ borderRight: '1px solid var(--interwar-gold)', borderRadius: 0 }}
                                        onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                                    <span className="px-3 small fw-bold">{qty}</span>
                                    <button className="btn btn-sm px-3"
                                        style={{ borderLeft: '1px solid var(--interwar-gold)', borderRadius: 0 }}
                                        onClick={() => setQty(q => q + 1)}>+</button>
                                </div>
                            </div>

                            <div className="d-flex gap-3 flex-wrap">
                                <Button size="lg" onClick={handleAdd}
                                    style={{
                                        backgroundColor: added ? 'var(--interwar-green)' : 'var(--interwar-ink)',
                                        border: 'none',
                                        fontFamily: 'var(--font-title)',
                                        letterSpacing: '0.04em',
                                        transition: 'background-color .3s',
                                        minWidth: 200,
                                    }}>
                                    {added ? `✓ ${t('Added to cart!')}` : `${t('Add to cart')}`}
                                </Button>
                                <Link href="/shop" className="btn btn-outline-secondary btn-lg">
                                    ← {t('Back to Shop')}
                                </Link>
                            </div>

                            {cart.count > 0 && (
                                <div className="mt-3">
                                    <Link href="/shop" className="small" style={{ color: 'var(--interwar-gold)' }}>
                                        {t('View cart')} ({cart.count} {t('items')}) →
                                    </Link>
                                </div>
                            )}
                        </Col>
                    </Row>

                    {related.length > 0 && (
                        <div className="mt-5 pt-4" style={{ borderTop: '2px solid var(--interwar-gold)' }}>
                            <h3 className="mb-4" style={{ fontFamily: 'var(--font-title)', color: 'var(--interwar-ink)' }}>
                                {t('You might also like')}
                            </h3>
                            <Row xs={2} md={4} className="g-3">
                                {related.map(rel => (
                                    <Col key={rel.id}>
                                        <Link href={`/shop/${rel.id}`} style={{ textDecoration: 'none' }}>
                                            <div className="card h-100 shadow-sm"
                                                style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)' }}>
                                                <div style={{ height: 120, overflow: 'hidden' }}>
                                                    {rel.image_url ? (
                                                        <img src={rel.image_url} alt={rel.title}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    ) : (
                                                        <div className="d-flex align-items-center justify-content-center h-100"
                                                            style={{ fontSize: '2rem', color: 'var(--interwar-silver)', backgroundColor: '#f5e8d0' }}>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="card-body p-2">
                                                    <p className="small fw-semibold mb-1 text-truncate"
                                                        style={{ color: 'var(--interwar-ink)', fontFamily: 'var(--font-title)' }}>
                                                        {rel.title}
                                                    </p>
                                                    <p className="small mb-0" style={{ color: 'var(--interwar-gold)' }}>
                                                        {rel.price ? `${Number(rel.price).toFixed(2)} RON` : t('Free')}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    )}
                </div>
            </StandardMenuLayout>
        </>
    );
}
